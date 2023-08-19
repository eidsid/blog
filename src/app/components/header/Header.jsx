"use client";
import React, { useState } from "react";
import "./header.scss";
import Link from "next/link";
import Theme from "../theme/Theme";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
  const [Active, setActive] = useState(false);
  const links = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Portfolio",
      url: "/portfolio",
    },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Dashboard",
      url: "/dashboard",
    },
    {
      text: "Blog",
      url: "/blog",
    },
    {
      text: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className="header">
      <div className="logo">DIV</div>
      <Theme />
      <div className={`links ${Active && "active"}`}>
        {links.map(({ text, url }, index) => {
          return (
            <Link href={url} key={index}>
              <div>{text}</div>
            </Link>
          );
        })}
      </div>
      {session.status === "authanticated" && (
        <button onClick={() => signOut}>Log Out</button>
      )}
      <div className="navToggle" onClick={() => setActive((prev) => !prev)}>
        <div className="toggleIcon"></div>
      </div>
    </div>
  );
};

export default Header;
