"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import defultimage from "@/../public/hero.png";
import Postshow from "../postShow/PsotShow";
import CreatePost from "../createpost/CreatePost";
import "./style.scss";
import axios from "axios";
import MessagesShow from "../messagesShow/messagesShow";
import Loading from "../loading/Loading";
const DashboardShow = ({ name, image }) => {
  const [showCreatePostPanal, setshowCreatePostPanal] = useState(false);
  const [Postsdata, setPostsData] = useState([]);
  const [loading, setloading] = useState(true);

  const updatePosts = async () => {
    const posts = await axios.get("/api/posts/");
    setPostsData(posts.data);
    setloading(false);
  };
  useEffect(() => {
    updatePosts();
  }, [showCreatePostPanal]);

  const handelCreatePostPanelState = (state) => {
    setshowCreatePostPanal(state);
  };
  return (
    <div className="dashshow">
      <div className="dashshow_header">
        <div className="name">{name}</div>
        <Image
          src={image ? image : defultimage}
          width={30}
          height={30}
          alt={`user image icon ${name}`}
        />
      </div>
      <div className="btnContaineer">
        <button
          onClick={() => handelCreatePostPanelState(true)}
          className="btn"
        >
          Create Post
        </button>
      </div>
      {showCreatePostPanal && (
        <CreatePost
          updatePosts={updatePosts}
          handelCreatePostPanelState={handelCreatePostPanelState}
        />
      )}
      {loading && <Loading />}
      <div className="postsList">
        {Postsdata.map((item) => {
          return (
            <Postshow post={item} updatePosts={updatePosts} key={item._id} />
          );
        })}
      </div>
      <div className="messagesList">
        <div className="title">messagesList</div>
        <MessagesShow />
      </div>
    </div>
  );
};

export default DashboardShow;
