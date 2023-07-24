"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import CreatePost from "@/components/createpost/CreatePost";
import axios from "axios";
import PostShow from "@/components/PostShow/PostShow";

const page = () => {
  const session = useSession();
  console.log(session);
  const [CreatePostPanelState, setCreatePostPanelState] = useState(false);
  const [Posts, setPosts] = useState([]);
  const updatePosts = async () => {
    const posts = await axios.get("/api/posts/");
    setPosts(posts.data);
  };
  useEffect(() => {
    updatePosts();
  }, [CreatePostPanelState]);
  const handsPostPanel = () => {
    setCreatePostPanelState((prev) => !prev);
  };
  return (
    <>
      {session.status === "unauthenticated" ? (
        <div className={styles.Logincontainer}>
          <h1 className={styles.heading}>Login First </h1>
          <div className={styles.links}>
            <Link className={styles.link} href="dashboard/login">
              Login
            </Link>
            <Link className={styles.link} href="dashboard/register">
              Don't have an account?
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.createPost}>
            <CreatePost
              display={CreatePostPanelState}
              handelCreatePostPanelState={setCreatePostPanelState}
            />
            <button className={styles.button} onClick={() => handsPostPanel()}>
              Create Post
            </button>
          </div>
          <div className={styles.postsList}>
            {Posts.map((post) => {
              return <PostShow post={post} updatePosts={updatePosts} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default page;
