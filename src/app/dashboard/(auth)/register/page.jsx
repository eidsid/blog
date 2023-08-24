"use client";
import React, { useState } from "react";
import "./style.scss";
import { useRouter } from "next/navigation";
import Button from "@/app/components/button/Button";
import axios from "axios";

const Register = () => {
  const router = useRouter();
  const [User, setUser] = useState({});
  const [Error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", User);
      router?.push("/dashboard/login");
    } catch (err) {
      setError(err.response.data);
    }
  };
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    console.log(User);
  };

  return (
    <div className="container register">
      <h1 className="title">Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Username"
          onChange={handelChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handelChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handelChange}
          required
        />
        {Error && <p className="errorMessage">{Error}</p>}
        <button>Register</button>
      </form>

      <Button
        url={"/dashboard/login"}
        text={" Login with an existing account"}
      />
    </div>
  );
};

export default Register;
