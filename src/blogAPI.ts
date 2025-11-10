import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://127.0.0.1:3001/posts", { cache: "no-store" }); // 更新が多いのでSSR

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }
  await new Promise((resolve) => setTimeout(resolve, 1500)); // デバッグ用遅延

  const articles = await res.json();
  return articles;
};

export const getDetailArticles = async (id: string): Promise<Article> => {
  const res = await fetch(`http://127.0.0.1:3001/posts"${id}`, {
    next: { revalidate: 60 },
  }); // 60秒ごとにISRで再生成

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const articles = await res.json();
  return articles;
};

export const createArticles = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDatetime = new Date().toISOString(); // 現在の日時取得できる
  const res = await fetch(`http://127.0.0.1:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDatetime }),
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newArticles = await res.json();
  return newArticles;
};
