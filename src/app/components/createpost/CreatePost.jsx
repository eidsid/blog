import axios from "axios";
import "./styles.scss";

const CreatePost = ({
  handelCreatePostPanelState,
  setPost,
  updatePosts,
  Post,
  authorName,
}) => {
  const handleClose = () => handelCreatePostPanelState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (authorName) {
      setPost((prev) => ({ ...prev, authorName }));
    }
    try {
      if (
        (Post.title && Post.description && Post.content && Post.img,
        Post.authorName)
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
    <form onSubmit={HandleSubmit} className="container createPost">
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
        <div>
          you can only use images from this site
          <a href="https://www.pexels.com/" className="link_decore">
            {" "}
            pexels
          </a>
        </div>
        Image URL:
        <input required name="img" type="text" onChange={handelChange} />
      </label>
      <button type="submit" className="btn">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
