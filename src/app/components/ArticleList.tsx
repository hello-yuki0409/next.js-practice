import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image src="https://picsum.photos/800" alt="" width={1280} height={300} />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">
            Technology
          </Link>
          <Link href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
          </Link>
          <p className="text-sm pb-3">
            By{" "}
            <Link href="#" className="font-semibold hover:text-gray-800">
              David Grzyb
            </Link>
            , Published on April 25th, 2020
          </p>
          <Link href="#" className="pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu
            iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
            posuere magna..
          </Link>
          <Link href="#" className="uppercase text-gray-800 hover:text-black">
            Continue Reading
          </Link>
        </div>
      </article>
      <article>
        <Link href="#">
          <Image src="https://picsum.photos/800" alt="" width={1280} height={300} />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">
            Technology
          </Link>
          <Link href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
          </Link>
          <p className="text-sm pb-3">
            By{" "}
            <Link href="#" className="font-semibold hover:text-gray-800">
              David Grzyb
            </Link>
            , Published on April 25th, 2020
          </p>
          <Link href="#" className="pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu
            iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
            posuere magna..
          </Link>
          <Link href="#" className="uppercase text-gray-800 hover:text-black">
            Continue Reading
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
