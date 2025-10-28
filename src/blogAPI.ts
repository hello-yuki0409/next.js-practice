import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); // 更新が多いのでSSR

  const articles = await res.json(); // データを文字列化
  return articles;
};
