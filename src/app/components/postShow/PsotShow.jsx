import React from "react";
import "./styles.scss";
import axios from "axios";
import Image from "next/image";

const Postshow = ({
  post: { title, description, content, img, authorName, _id },
  updatePosts,
}) => {
  const handelDelate = async () => {
    let acceptance = confirm(" Are You Sure");
    if (acceptance) {
      await axios.delete(`/api/posts/${_id}`);
      updatePosts();
    }
  };

  let splitContent = content.split("");
  if (splitContent.length > 150) {
    splitContent = splitContent.slice(0, 150);
    splitContent = splitContent.join("") + "...";
  } else {
    splitContent = splitContent.join("");
  }
  return (
    <div className="  postShow">
      <h1 className="title">{title}</h1>
      <Image src={img} alt={title} height={30} width={30} />
      <p className="description">{description}</p>
      <p className="content">{splitContent}</p>
      <p className="author">By {authorName}</p>
      <button className="btn" onClick={handelDelate}>
        delete
      </button>
    </div>
  );
};

export default Postshow;
