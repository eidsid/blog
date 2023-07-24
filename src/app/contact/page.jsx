import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import contactImage from "@/../public/contact.png";
import Button from "@/components/Button/Button";
export const metadata = {
  title: "contact page",
  description: "this is contact page of dev&lap website you can contact theme",
};
const page = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Let's Keep in Touch</h1>
      <div className={Styles.items}>
        <div className={Styles.item}>
          <Image src={contactImage} width={200} height={200} alt="hero" />
        </div>
        <div className={Styles.item}>
          <form className={Styles.form}>
            <input
              type="text"
              className={`${Styles.input} input`}
              placeholder="name"
            />
            <input
              type="text"
              className={`${Styles.input} input`}
              placeholder="email"
            />
            <textarea
              type="text"
              className={`${Styles.input} input`}
              placeholder="message"
            />
            <Button text="Send" url="/contact" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
