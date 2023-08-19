import Image from "next/image";
import React, { useEffect, useState } from "react";
import defultimage from "@/../public/hero.png";
import Postshow from "../postShow/PsotShow";
import CreatePost from "../createpost/CreatePost";
import "./style.scss";
import axios from "axios";
const DashboardShow = ({ name, image }) => {
  const [showCreatePostPanal, setshowCreatePostPanal] = useState(false);
  const [Posts, setPosts] = useState([]);

  const updatePosts = async () => {
    const posts = await axios.get("/api/posts/");

    console.log(Posts);
    setPosts(posts);
  };

  useEffect(() => {
    updatePosts();
  }, []);

  const handelCreatePostPanelState = (state) => {
    setshowCreatePostPanal(state);
  };
  return (
    <div className=" dashshow">
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
        <button onClick={() => handelCreatePostPanelState(true)}>
          Create Post
        </button>
      </div>
      {showCreatePostPanal && (
        <CreatePost
          updatePosts={updatePosts}
          handelCreatePostPanelState={handelCreatePostPanelState}
        />
      )}
      <div className="postsList">
        {Posts.map((item) => {
          return (
            <Postshow post={item} updatePosts={updatePosts} key={item._id} />
          );
        })}
      </div>
    </div>
  );
};

export default DashboardShow;
