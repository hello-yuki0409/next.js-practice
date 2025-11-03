import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://127.0.0.1:3001/posts", { cache: "no-store" }); // 更新が多いのでSSR

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }
  await new Promise((resolve) => setTimeout(resolve, 1500)); // デバッグ用遅延

  const articles: Article[] = await res.json();
  return articles;
};
