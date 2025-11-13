import { getDetailArticles } from "@/src/blogAPI";
import Image from "next/image";
import React from "react";
import DeleteButton from "../../components/DeleteButton";

const Article = async ({ params }: { params: { id: string } }) => {
  const detailArticle = await getDetailArticles(params.id);
  console.log(detailArticle);

  return (
    <div>
      <div className="max-w-3x1 mx-auto p-5">
        <Image src="https://picsum.photos/800" alt="" width={1280} height={300} />
        {detailArticle.title}
        <div className="text-lg leading-relaxed text-justify">
          <p>{detailArticle.content}</p>
        </div>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
