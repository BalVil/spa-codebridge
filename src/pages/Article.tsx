import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import apiServices from 'services/spaceflight-api';

import FullArticle from 'components/FullArticle';

type QuizParams = {
  articleId: string;
};

interface ItemProps {
  imageUrl: string;
  title: string;
  summary: string;
}

const Article = () => {
  const [article, setArticle] = useState<ItemProps | null>();
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
