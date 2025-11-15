import { Article } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href={`/articles/${article.id}`}>
          <Image src="https://picsum.photos/800" alt={article.title} width={1280} height={300} />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">
            Technology
          </Link>
          <Link
            href={`/articles/${article.id}`}
            className="text-3xl font-bold hover:text-gray-700 pb-4"
          >
            {article.title}
          </Link>
          <p className="text-sm pb-3">Published on {article.createdAt}</p>
          <Link href={`/articles/${article.id}`} className="pb-6">
            {article.content.length > 70
              ? article.content.substring(0, 70) + "..."
              : article.content}
          </Link>
          <Link
            href={`/articles/${article.id}`}
            className="uppercase text-gray-800 hover:text-black"
          >
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
