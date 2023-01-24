import React from 'react';
import { Grid } from '@mui/material';

import ArticleItem from './ArticleItem';

interface IItem {
  id: string;
  imageUrl: string;
  publishedAt: Date | string;
  title: string;
  summary: string;
  url: string;
}

interface IProps {
  items: IItem[] | null | undefined;
  term?: string | undefined;
}

const ArticleList: React.FC<IProps> = ({ items, term }) => {
  const termValue = term;
  return (
    <Grid container spacing={{ mobile: 4, tablet: 6 }}>
      {items?.map(({ id, imageUrl, publishedAt, title, summary, url }) => (
        <ArticleItem
          key={id}
          articleId={id}
          imageUrl={imageUrl}
          imageAlt={title}
          date={publishedAt}
          articleTitle={title}
          summary={summary}
          articleUrl={url}
          termValue={termValue}
        />
      ))}
    </Grid>
  );
};

export default ArticleList;
