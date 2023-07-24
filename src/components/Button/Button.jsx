import Link from "next/link";
import React from "react";
import Styles from "./button.module.css";
const Button = ({ url, text, func }) => {
  return (
    <Link href={url} className="btn">
      <button className={Styles.btn}>{text}</button>
    </Link>
  );
};

export default Button;
