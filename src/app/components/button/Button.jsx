import Link from "next/link";
import React from "react";
import "./style.scss";
const Button = ({ url, text }) => {
  return (
    <Link href={url} alt={text}>
      <button className="btn">{text}</button>
    </Link>
  );
};

export default Button;
