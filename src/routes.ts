// pages
import Home from "./pages/Home";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

// other
import { FC } from "react";

// interface
interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
  },
  {
    key: "article-route",
    title: "Article",
    path: "/:articleId",
    enabled: true,
    component: Article,
  },
  {
    key: "not-found",
    title: "NotFound",
    path: "*",
    enabled: true,
    component: NotFound,
  },
];
