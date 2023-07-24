import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Link from "next/link";
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("faild to fetch data");

  return res.json();
}
export const metadata = {
  title: "blog page",
  description: "this is blog page contain all posts",
};
const page = async () => {
  const data = await getData();
  console.log(data.data);

  return (
    <>
      <div className={styles.container}>
        {data.map(
          ({
            title,
            description,
            content,
            img,
            _id,
            createdAt,
            authorName,
            authorImage,
          }) => {
            console.log(authorName, authorImage);
            return (
              <div className={styles.item} key={_id}>
                <div className={styles.subitem}>
                  <Image src={img} alt={title} width={150} height={150} />
                </div>
                <div className={styles.subitem}>
                  <h1 className={styles.title}>{title}</h1>
                  <p className={styles.paragraph}>{description}</p>
                  <p className={styles.paragraph}>{content}</p>
                  <div className={styles.blogInfo}>
                    <div className={styles.date}>{createdAt}</div>
                    <div className={styles.author}>
                      <h3>{authorName}</h3>
                      <Image
                        src={authorImage}
                        width={30}
                        height={30}
                        alt="author image"
                      />
                    </div>
                  </div>
                  <div className={styles.btn}>
                    <Button text="See More" url={"blog/" + _id} />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default page;
