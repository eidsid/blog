import { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";
import { useSession } from "next-auth/react";

const CreatePost = ({ updatePosts, handelCreatePostPanelState }) => {
  const session = useSession();

  const [Post, setPost] = useState("");
  let authorName = session?.data?.user?.name;

  const handleClose = () => handelCreatePostPanelState(false);
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
        updatePosts();
        handelCreatePostPanelState();
      }
    } catch (error) {
      console.log("some thing went wrong");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <div onClick={handleClose} className="close"></div>
      <h2 className="title">Create a New Post</h2>
      <label>
        Title:
        <input required name="title" type="text" onChange={handelChange} />
      </label>
      <label>
        Description:
        <input
          required
          name="description"
          type="text"
          onChange={handelChange}
        />
      </label>
      <label>
        Content:
        <textarea required name="content" onChange={handelChange} />
      </label>
      <label>
        Image URL:
        <input required name="img" type="text" onChange={handelChange} />
      </label>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
