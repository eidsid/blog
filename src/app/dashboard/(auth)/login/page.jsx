"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import "./style.scss";
import Link from "next/link";

const Page = () => {
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
    <div className="container login">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Email:
          <input name="email" type="email" onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>

      <div className="bottom">
        <button onClick={() => signIn("github")}>login with github</button>
        <Link href="/dashboard/register">Create an account</Link>
      </div>
    </div>
  );
};

export default Page;
