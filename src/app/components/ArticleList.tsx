import { Article } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <article className="shadow my-4 flex flex-col" key={article.id}>
          <Link href="#">
            <Image src="https://picsum.photos/800" alt="" width={1280} height={300} />
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">
              Technology
            </Link>
            <Link href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
              {article.title}
            </Link>
            <p className="text-sm pb-3">Published on {article.createdAt}</p>
            <Link href="#" className="pb-6">
              {article.content}
            </Link>
            <Link href="#" className="uppercase text-gray-800 hover:text-black">
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
