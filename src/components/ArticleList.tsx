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
  items: IItem[];
  term: string;
}

const ArticleList: React.FC<IProps> = (props, term) => {
  console.log(term);

  return (
    <Grid container spacing={{ mobile: 4, tablet: 6 }}>
      {props.items.map(({ id, imageUrl, publishedAt, title, summary, url }) => (
        <ArticleItem
          key={id}
          articleId={id}
          imageUrl={imageUrl}
          imageAlt={title}
          date={publishedAt}
          articleTitle={title}
          summary={summary}
          articleUrl={url}
          term={term}
        />
      ))}
    </Grid>
  );
};

export default ArticleList;
