import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import illustrationsImage from "@/../public/illustration.png";
import websitesImage from "@/../public/websites.jpg";
import appsImage from "@/../public/apps.jpg";
import Link from "next/link";
import { notFound } from "next/navigation";
let items = [
  {
    id: 1,
    title: "illustration",
    image: illustrationsImage,
    paragraph:
      "ipsum, dolor sit amet consectetur adipisicing elit. Impedit, excepturi. Obcaecati rem a sapiente. Voluptatem laborum praesentium non pariatur dolorem?",
  },
  {
    id: 2,
    title: "websites",
    image: websitesImage,
    paragraph:
      "ipsum, dolor sit amet consectetur adipisicing elit. Impedit, excepturi. Obcaecati rem a sapiente. Voluptatem laborum praesentium non pariatur dolorem?",
  },
  {
    id: 3,
    title: "apps",
    image: appsImage,
    paragraph:
      "ipsum, dolor sit amet consectetur adipisicing elit. Impedit, excepturi. Obcaecati rem a sapiente. Voluptatem laborum praesentium non pariatur dolorem?",
  },
];
const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

export async function generateMetadata({ params }) {
  return {
    title: params.catogery,
    description: `this is  portofolio page contain all  ${params.catogery} projects`,
  };
}

const page = ({ params }) => {
  return (
    <>
      <div className={styles.top}>
        <h1>
          <Link href="/portfolio" className={styles.galleryLink}>
            Gallery
          </Link>
        </h1>
        <h1 className={styles.catTitle}> {params.catogery} </h1>
      </div>
      <div className={styles.container}>
        {items.map(({ id, title, paragraph, image }) => {
          const { width, height, ...rest } = image;
          return (
            <div className={styles.item} key={id}>
              <div className={styles.subitem}>
                <Image {...rest} fill={true} alt={title} />
              </div>
              <div className={styles.subitem}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.paragraph}>{paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
