import React, { useState } from "react";
import "./styles.scss";
import axios from "axios";
import Image from "next/image";
import { ShortenText } from "@/app/utils/ShortenText";
import date from "@/app/utils/date";
import EditPost from "../editpost/editPost";

const Postshow = ({ post, updatePosts }) => {
  const { title, description, content, img, authorName, createdAt, _id } = post;
  const [updatePanal, setupdatePanal] = useState(false);
  const [UpdatePost, setUpdatePost] = useState(post);

  const handelDelate = async () => {
    let acceptance = confirm(" Are You Sure");
    if (acceptance) {
      await axios.delete(`/api/posts/${_id}`);
      updatePosts();
    }
  };

  // update panal functions
  // handel open and close panal
  const handelupdatePanal = () => {
    setupdatePanal((prev) => !prev);
  };

  // handel update post from edit panal
  const handleEditForm = async (e) => {
    e.preventDefault();
    try {
      if (
        UpdatePost.title &&
        UpdatePost.description &&
        UpdatePost.content &&
        UpdatePost.img
      ) {
        await axios.put(`/api/posts/${_id}`, UpdatePost);
        updatePosts();
        handelupdatePanal();
      }
    } catch (error) {
      console.log("some thing went wrong", error.message);
    }
  };

  // handel changes of inputs from edit panal
  const handelChangeofEditpost = (e) => {
    const { name, value } = e.target;
    setUpdatePost((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="postShow">
      <h1 className="title">{title}</h1>
      <Image src={img} alt={title} height={30} width={30} />
      <p className="description">{description}</p>
      <div className="time">created At {date(createdAt)}</div>
      <p className="content">{ShortenText(content)}</p>
      <p className="author">By {authorName}</p>
      <div className="btns">
        <button className="btn edit" onClick={handelupdatePanal}>
          Edit
        </button>
        <button className="btn delete" onClick={handelDelate}>
          delete
        </button>
      </div>
      {updatePanal && (
        <EditPost
          handelEditPostPanelState={handelupdatePanal}
          UpdatePost={UpdatePost}
          UpdatePostFunction={handelChangeofEditpost}
          handleEditForm={handleEditForm}
        />
      )}
    </div>
  );
};

export default Postshow;
