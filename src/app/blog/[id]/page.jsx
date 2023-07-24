import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  if (!res.ok) throw new Error("fatch data failed");
  return res.json();
};
export async function generateMetadata({ params }) {
  const blog = await getData(params.id);
  return {
    title: blog.title,
    description: blog.description,
  };
}

const page = async ({ params }) => {
  const blog = await getData(params.id);
  const {
    title,
    description,
    content,
    img,
    _id,
    createdAt,
    authorName,
    authorImage,
  } = blog;

  return (
    <div>
      <div className={styles.top} id={_id}>
        <h1>
          <Link href="/blog" className={styles.galleryLink}>
            Blogs
          </Link>
        </h1>
      </div>

      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.subitem}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.paragraph}>{description}</p>
            <br />
            <div className={styles.author}>
              <Image
                className={styles.img}
                src={authorImage}
                width={50}
                height={50}
              />{" "}
              <p>{authorName}</p>
            </div>
          </div>{" "}
          <div className={styles.subitem}>
            <Image src={img} width={50} height={50} alt={title} />
          </div>
        </div>
        <div className={styles.bottom}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
