"use client";
import { useState } from "react";
import Styles from "./page.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const [User, setUser] = useState({});

  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let createUser = await axios.post(
        "/api/auth/register",
        JSON.stringify(User),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(createUser);
      router.push("/");
    } catch (err) {
      console.log(
        "error while creating the user and this is the error " + err.message
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <label className={Styles.label}>
        Username:
        <input
          type="text"
          name="username"
          onChange={handleChange}
          className={Styles.input}
          required
        />
      </label>
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
        />
      </label>
      <button type="submit" className={Styles.button} onClick={handleSubmit}>
        Register
      </button>
      <Link href="/dashboard/login">have an account</Link>
    </form>
  );
};

export default Register;
