"use client";
import React, { useState } from "react";
import Styles from "./Header.module.css";
import Link from "next/link";
import Theme from "../THeme/Theme";
import { signOut, useSession } from "next-auth/react";

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

const Header = () => {
  const session = useSession();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={Styles.Container}>
      <div className={Styles.Logo}>Dev & Lap</div>

      <ul className={`${Styles.LinksContainer} ${isNavOpen && Styles.Open}`}>
        <div className={Styles.Theme}>
          <Theme />
        </div>
        {links.map((link, index) => (
          <li key={index} className={Styles.Link}>
            <Link href={link.url}>{link.text}</Link>
          </li>
        ))}
        {session.status === "authenticated" && (
          <button className={Styles.btn} onClick={() => signOut()}>
            Sign out
          </button>
        )}
      </ul>
      <div className={Styles.NavToggle} onClick={handleNavToggle}>
        <span className={Styles.ToggleIcon} />
      </div>
    </div>
  );
};

export default Header;
