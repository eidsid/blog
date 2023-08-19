import React from "react";
import "./style.scss";
import Image from "next/image";
import illustrationsImage from "@/../public/illustration.png";
import websitesImage from "@/../public/websites.jpg";
import appsImage from "@/../public/apps.jpg";
import Link from "next/link";
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

export async function generateMetadata({ params }) {
  return {
    title: params.catogery,
    description: `this is  portofolio page contain all  ${params.catogery} projects`,
  };
}

const page = ({ params }) => {
  return (
    <div className="container">
      <div className=" catogrey">
        <div className="top">
          <h1>
            <Link href="/portfolio" className="galleryLink">
              Gallery
            </Link>
          </h1>
          <h1 className="catTitle"> {params.catogery} </h1>
        </div>
        <div className="itemsContainer">
          {items.map(({ id, title, paragraph, image }) => {
            return (
              <div className="item" key={id}>
                <div className="subitem">
                  <Image src={image.src} fill={true} alt={title} />
                </div>
                <div className="subitem">
                  <h1 className="title">{title}</h1>
                  <p className="paragraph">{paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
