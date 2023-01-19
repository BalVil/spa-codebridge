import { ReactElement, FC, useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Container,
  Typography,
  styled,
  InputBase,
  FormLabel,
  InputAdornment,
  IconButton,
  InputBaseProps,
  FormControl,
} from '@mui/material';
import { InputLabelProps } from '@mui/material/InputLabel';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import ArticleList from 'components/ArticleList';
import notices from 'components/Notification';
import apiServices from 'services/spaceflight-api';
import { ReactComponent as SearchIcon } from 'assets/search-icon.svg';

const SearchInput = styled(InputBase)<InputBaseProps>(({ theme }) => ({
  padding: '13px 20px',
  borderRadius: '5px',
  border: `1px solid ${theme.palette.secondary.dark}`,
  boxShadow: `0px 8px 24px rgba(0, 0, 0, 0.05)`,
  fontSize: 16,
  'label + &': {
    marginTop: '25px',
  },
}));

const SearchLabel = styled(FormLabel)<InputLabelProps>(({ theme }) => ({
  fontWeight: 600,
  fontSize: 16,
  lineHeight: '20px',
  color: theme.palette.primary.dark,
  '&.Mui-focused': {
    color: theme.palette.primary.dark,
  },
}));

const SearchForm = styled(FormControl)(({ theme }) => ({
  width: '100%',
  marginBottom: '40px',
  [theme.breakpoints.up('tablet')]: {
    width: '600px',
  },
})) as typeof FormControl;

type FormValues = {
  SearchInput: string;
};

const Home: FC<any> = (): ReactElement => {
  const [articles, setArticles] = useState<any[] | null>();
  const [term, setTerm] = useState('');
  console.log(term);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(articles);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm<FormValues>();

  useEffect(() => {
    setLoading(true);
    Loading.arrows({
      svgColor: '#f59256',
      backgroundColor: 'rgba(0,0,0,0.1)',
    });

    apiServices
      .getArticles()
      .then(data => {
        setArticles(data);
        setLoading(false);
        Loading.remove();
      })
      .catch(error => {
        setError(true);
        setLoading(false);
        Loading.remove();
        console.log(error);
        return notices.showError('Oops, try again');
      });
  }, []);

  const onSubmit = (term: FormValues) => {
    setTerm(term?.SearchInput.trim());

    if (term.SearchInput.trim() === '') {
      console.log('Enter something');
      return;
    }

    Loading.arrows({
      svgColor: '#f59256',
      backgroundColor: 'rgba(0,0,0,0.1)',
    });

    apiServices
      .getArticles(term.SearchInput)
      .then(data => {
        setArticles(data);
        setLoading(false);
        Loading.remove();
        // setArticles(null);
      })
      .catch(error => {
        Loading.remove();
        setError(true);
        setLoading(false);
        console.log(error);
      });
  };

  // const watchIsDeveloper = watch("mo");

  return (
    <Box>
      <Container maxWidth={false} sx={{ px: '75px' }} disableGutters>
        {/* {loading && <h3>Loading...</h3>} */}
        {error && <h3>Something went wrong.</h3>}
        <Box
          sx={{
            pt: '50px',
            borderBottom: 1,
            borderColor: 'secondary.dark',
          }}
        >
          <SearchForm
            component="form"
            variant="standard"
            onSubmit={handleSubmit(onSubmit)}
          >
            <SearchLabel htmlFor="term">Filter by keywords</SearchLabel>
            <Controller
              render={({ field: { name, value, onChange } }) => (
                <SearchInput
                  name={name}
                  value={value}
                  onChange={onChange}
                  inputProps={{
                    style: {
                      padding: 0,
                    },
                  }}
                  id="term"
                  placeholder="Search..."
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        sx={{ mr: '4px' }}
                        type="submit"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
              defaultValue=""
              name="SearchInput"
              control={control}
            />
          </SearchForm>

          <Typography variant="subtitle1" component="p" sx={{ pb: '5px' }}>
            Results: {articles ? articles.length : 0}
          </Typography>
        </Box>
        <Box mt={6} mb={7}>
          {/* {searchData?.length && <ArticleList items={searchData} />} */}
          {articles && <ArticleList items={articles} term={term} />}
          {!articles?.length && !loading && (
            <Typography>Sorry, nothing was found</Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
