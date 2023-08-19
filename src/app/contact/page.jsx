import React from "react";
import "./style.scss";
import Image from "next/image";
import contactImage from "@/../public/contact.png";
import Button from "../components/button/Button";
export const metadata = {
  title: "contact page",
  description: "this is contact page of dev&lap website you can contact theme",
};
const page = () => {
  return (
    <div className="container ">
      <div className="contact">
        <h1 className="title">Let's Keep in Touch</h1>
        <div className="items">
          <div className="item">
            <Image src={contactImage} width={200} height={200} alt="hero" />
          </div>
          <div className="item">
            <form>
              <input type="text" className="input" placeholder="name" />
              <input type="text" className="input" placeholder="email" />
              <textarea type="text" className="input" placeholder="message" />
              <Button text="Send" url="/contact" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
