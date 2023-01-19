import { ReactElement, FC, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box, Typography, Link, Icon } from '@mui/material';

import apiServices from 'services/spaceflight-api';

import FullArticle from 'components/FullArticle';

type QuizParams = {
  articleId: string;
};

const Article = () => {
  const [article, setArticle] = useState<any[] | null>();
  const { articleId } = useParams<QuizParams>();

  useEffect(() => {
    apiServices
      .getArticleById(articleId ?? '')
      .then(data => {
        setArticle(data);
      })
      .catch(console.log);
  }, [articleId]);

  return <>{article && <FullArticle item={article} />}</>;
};

export default Article;
