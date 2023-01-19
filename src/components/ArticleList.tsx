import React from "react";
import { Grid } from "@mui/material";

import ArticleItem from "./ArticleItem";

interface IItem {
  id: string;
  imageUrl: string;
  publishedAt: Date | string;
  title: string;
  summary: string;
}

interface IProps {
  items: IItem[];
}

const ArticleList: React.FC<IProps> = (props) => {
  return (
    <Grid container spacing={{ mobile: 4, tablet: 6 }}>
      {props.items.map(({ id, imageUrl, publishedAt, title, summary }) => (
        <ArticleItem
          key={id}
          articleId={id}
          imageUrl={imageUrl}
          imageAlt={title}
          date={publishedAt}
          articleTitle={title}
          summary={summary}
        />
      ))}
    </Grid>
  );
};

export default ArticleList;
