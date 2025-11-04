import Image from "next/image";
import React from "react";

const Article = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w-3x1 mx-auto p-5">
      <Image src="https://picsum.photos/800" alt="" width={1280} height={300} />
      <h1>タイトルです。</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>記事の本文です。</p>
      </div>
    </div>
  );
};

export default Article;
