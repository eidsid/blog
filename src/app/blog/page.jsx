"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import "./style.scss";
import Button from "../components/button/Button";
import { ShortenText } from "../utils/ShortenText";

export const metadata = {
  title: "blog page",
  description: "this is blog page contain all posts",
};

const page = () => {
  const [postsData, setpostsData] = useState([]);
  const updatePosts = async () => {
    const posts = await axios.get("/api/posts/");
    console.log(posts);
    setpostsData(posts.data);
  };

  useEffect(() => {
    console.log("rendered");
    updatePosts();
  }, []);

  return (
    <div className="blogs container">
      <div className="title">
        <h1>Latest posts</h1>
      </div>
      <div className="posts">
        {postsData.map(
          ({ title, description, content, img, _id, createdAt }) => {
            return (
              <div className="post " key={_id}>
                <div className="imagContainer">
                  <Image
                    src={img}
                    alt={title + " image"}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="content">
                  <h1 className="title ">{title}</h1>
                  <div className="date">{createdAt}</div>
                  <p className="description">{description}</p>
                  <p className="paragragh">{ShortenText(content)}</p>

                  <Button url={"blog/" + _id} text="See More" />
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
