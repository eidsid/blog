"use client";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import "./style.scss";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const [User, setUser] = useState({});
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);
  useEffect(() => {
    if (session && session?.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let signin = await signIn("credentials", {
        ...User,
        redirect: false,
      });
      if (signin.error) {
        setError(signin.error);
      }
    } catch (error) {
      setError(error.error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  if (session.status === "loading") {
    return <p className="loading container">Loading...</p>;
  }

  return (
    <div className="container login">
      {success && (
        <h1 className="title">{success ? success : "Welcome Back"}</h1>
      )}
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
        {error && <p className="errorMessage">{error}</p>}
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
