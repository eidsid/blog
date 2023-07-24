import { useEffect, useState } from "react";
import styles from "./CreatePost.module.css";
import axios from "axios";
import { useSession } from "next-auth/react";

const CreatePost = ({ display, handelCreatePostPanelState }) => {
  const session = useSession();

  const [Post, setPost] = useState("");
  let authorName = session?.data?.user?.name;
  useEffect(() => {
    authorName = session?.data?.user?.name;
  }, [session?.data]);
  const handleClose = () => handelCreatePostPanelState();
  const handelChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPost((prev) => ({ ...prev, authorName }));

    try {
      if (
        (Post.title && Post.description && Post.content && Post.img, authorName)
      ) {
        await axios.post("/api/posts/", Post);
        handelCreatePostPanelState();
      }
    } catch (error) {
      console.log("some thing went wrong");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`${!display && styles.hidde} ${styles.Form}`}
    >
      <div onClick={handleClose} className={styles.close}></div>
      <h2 className={styles.title}>Create a New Post</h2>
      <label className={styles.label}>
        Title:
        <input
          className={styles.input}
          required
          name="title"
          type="text"
          onChange={handelChange}
        />
      </label>
      <label className={styles.label}>
        Description:
        <input
          className={styles.input}
          required
          name="description"
          type="text"
          onChange={handelChange}
        />
      </label>
      <label className={styles.label}>
        Content:
        <textarea
          className={styles.textarea}
          required
          name="content"
          onChange={handelChange}
        />
      </label>
      <label className={styles.label}>
        Image URL:
        <input
          className={styles.input}
          required
          name="img"
          type="text"
          onChange={handelChange}
        />
      </label>
      <button className={styles.button} type="submit">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
