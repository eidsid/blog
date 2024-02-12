"use client";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import Image from "next/image";
import axios from "axios";
import date from "@/app/utils/date";

async function getData(id) {
  try {
    const res = await axios.get(`/api/posts/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error for handling in the component
  }
}

const BlogPost = ({ params }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getData(params.id);
        setPost(postData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [params.id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

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
