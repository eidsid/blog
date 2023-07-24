"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import Styles from "./page.module.css";

import Link from "next/link";
const page = () => {
  const [User, setUser] = useState({});
  const session = useSession();
  if (session.status === "authenticated") redirect("/dashboard");

  const handleSubmit = async (event) => {
    event.preventDefault();
    signIn("credentials", User);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`Globalheight ${Styles.main}`}>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <label className={Styles.label}>
          Email:
          <input
            name="email"
            type="email"
            onChange={handleChange}
            className={Styles.input}
            required
          />
        </label>
        <label className={Styles.label}>
          Password:
          <input
            name="password"
            type="password"
            onChange={handleChange}
            className={Styles.input}
            required
          />
        </label>
        <button type="submit" className={Styles.button} onClick={handleSubmit}>
          Login
        </button>
      </form>

      <div className={Styles.flex}>
        <button className={Styles.btn} onClick={() => signIn("github")}>
          login with github
        </button>
        <Link className={Styles.link} href="/dashboard/register">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default page;
