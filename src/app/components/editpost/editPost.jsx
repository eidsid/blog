import "./styles.scss";
const EditPost = ({
  UpdatePost,
  handelEditPostPanelState,
  handleEditForm,
  UpdatePostFunction,
}) => {
  const handleClose = () => handelEditPostPanelState(false);

  return (
    <form onSubmit={handleEditForm} className="container createPost">
      <div onClick={handleClose} className="close"></div>
      <h2 className="title">Edit {UpdatePost.title} Post</h2>
      <label>
        Title:
        <input
          required
          name="title"
          type="text"
          onChange={UpdatePostFunction}
          value={UpdatePost.title}
        />
      </label>
      <label>
        Description:
        <input
          required
          name="description"
          type="text"
          value={UpdatePost.description}
          onChange={UpdatePostFunction}
        />
      </label>
      <label>
        Content:
        <textarea
          required
          name="content"
          onChange={UpdatePostFunction}
          value={UpdatePost.content}
        />
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
        <input
          required
          name="img"
          type="text"
          onChange={UpdatePostFunction}
          value={UpdatePost.img}
        />
      </label>
      <button type="submit" className="btn">
        Edit Post
      </button>
    </form>
  );
};

export default EditPost;
