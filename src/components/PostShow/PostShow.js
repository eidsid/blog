import React from "react";
import styles from "./PostShow.module.css";
import axios from "axios";

const PostShow = ({
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
  console.log(splitContent.length);
  if (splitContent.length > 150) {
    splitContent = splitContent.slice(0, 150);
    splitContent = splitContent.join("") + "...";
  } else {
    splitContent = splitContent.join("");
  }
  return (
    <div className={styles.postShow}>
      <h1 className={styles.title}>{title}</h1>
      <img className={styles.img} src={img} alt={title} />
      <p className={styles.description}>{description}</p>
      <p className={styles.content}>{splitContent}</p>
      <p className={styles.author}>By {authorName}</p>
      <button className={styles.btn} onClick={handelDelate}>
        delete
      </button>
    </div>
  );
};

export default PostShow;
