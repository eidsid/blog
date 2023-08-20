import React from "react";
import "./styles.scss";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const getData = async (id) => {
  const post = await axios.get(`/api/posts/${id}`);
  return post.data;
};

export async function generateMetadata({ params }) {
  const blog = await getData(params.id);
  return {
    title: blog.title,
    description: blog.description,
  };
}

const page = async ({ params }) => {
  const blog = await getData(params.id);
  const {
    title,
    description,
    content,
    img,
    _id,
    createdAt,
    authorName,
    authorImage,
  } = blog;

  return (
    <div className="blog container">
      <div className="top" id={_id}>
        <h1>
          <Link href="/blog" className="galleryLink">
            Blogs
          </Link>
        </h1>
      </div>

      <div>
        <div className="top">
          <div className="subitem">
            <h1 className="title">{title}</h1>
            <p className="paragraph">{description}</p>
            <br />
            <div className="author">
              <Image src={authorImage} width={50} height={50} />
              <p>{authorName}</p>
            </div>
          </div>{" "}
          <div className="subitem">
            <Image src={img} width={50} height={50} alt={title} />
          </div>
        </div>
        <div className="bottom">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
