"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import "./style.scss";

export const metadata = {
  title: "blog page",
  description: "this is blog page contain all posts",
};

const page = async () => {
  const [postsData, setpostsData] = useState([]);
  const updatePosts = async () => {
    const posts = await axios.get("/api/posts/");
    console.log(posts);
    setpostsData(posts.data);
  };

  useEffect(() => {
    updatePosts();
  }, []);

  return (
    <div className="blogs container">
      <div className="title">
        <h1>Latest posts</h1>
      </div>
      <div className="posts">
        {postsData.map(
          ({
            title,
            description,
            content,
            img,
            _id,
            createdAt,
            authorName,
          }) => {
            return (
              <div className="post card-hover" key={_id}>
                <Image
                  src={img}
                  alt={title + " image"}
                  width={150}
                  height={150}
                />
                <div className="content card-hover__content">
                  <h1 className="title card-hover__title">{title}</h1>
                  <p className="description card-hover__text">{description}</p>
                  <p className="paragraph">{content}</p>
                  <div className="blogInfo">
                    <div className="date">{createdAt}</div>
                    <div className="author">
                      <h4>by {authorName}</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <Link href={"blog/" + _id}>See More</Link>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default page;
