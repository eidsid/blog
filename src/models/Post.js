import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const PostSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    authorName: {
      type: String,
    },
  },
  { timestamps: true }
);
const Posts = models.posts || model("posts", PostSchema);

export default Posts;
