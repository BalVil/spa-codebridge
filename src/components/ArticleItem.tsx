import { NavLink, useLocation } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Link,
} from "@mui/material";
import { format } from "date-fns";

interface IItemProp {
  articleId: string;
  imageAlt: string;
  imageUrl: string;
  date: Date | string;
  articleTitle: string;
  summary: string;
}

const ArticleItem: React.FC<IItemProp> = ({
  articleId,
  imageUrl,
  imageAlt,
  date,
  articleTitle,
  summary,
}) => {
  const location = useLocation();
  const MAX_TEXT_LENGTH = 100;

  return (
    <Grid item mobile={12} tablet={6} desktop={4} display="flex">
      <Card sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          sx={{ pt: 27 }}
          image={
            imageUrl ||
            "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          }
          title={imageAlt}
        />
        <CardContent sx={{ flexGrow: "1" }}>
          <Typography variant="caption">
            {format(new Date(date.toString()), "MMMM do, yyyy")}
          </Typography>
          <Typography gutterBottom variant="h3" mt={3}>
            {articleTitle}
          </Typography>
          <Typography variant="body1">
            {summary.length > MAX_TEXT_LENGTH
              ? `${summary
                  .slice(0, MAX_TEXT_LENGTH)
                  .split(" ")
                  .slice(0, -1)
                  .join(" ")}...`
              : summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            component={NavLink}
            to={`/${articleId}`}
            state={{ from: location }}
            underline="hover"
            color="inherit"
          >
            Read more
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArticleItem;
