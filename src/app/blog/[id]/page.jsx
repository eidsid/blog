import React from "react";
import "./styles.scss";
import Image from "next/image";
import { notFound } from "next/navigation";
import axios from "axios";
import date from "@/app/utils/date";

async function getData(id) {
  const res = await axios.get(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (res.data) {
    return res.data;
  } else {
    return notFound();
  }
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const post = await getData(params.id);
  const { title, description, content, img, createdAt, authorName } = post;
  return (
    <div className="container blog">
      <div className="top">
        <div className="info">
          <h1 className="title">{title}</h1>
          <div>date : {date(createdAt)}</div>
          <p className="desc">{description}</p>
          <div className="author">
            <Image
              src={img}
              alt={title + "image"}
              width={40}
              height={40}
              className="avatar"
            />
            <span className="username">{authorName && "by" + authorName}</span>
          </div>
        </div>
        <div className="imageContainer">
          <Image src={img} alt={title + "image"} fill={true} />
        </div>
      </div>
      <div className="content">
        <p className="text">{content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
