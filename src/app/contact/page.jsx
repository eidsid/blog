"use client";
import React, { useState } from "react";
import "./style.scss";
import Image from "next/image";
import contactImage from "@/../public/contact.png";
import axios from "axios";

const Page = () => {
  const [Contact, setContact] = useState({});
  const handelChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact/", Contact);
      e.target.reset();
      alert("message send success");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>contact page</title>
        <meta
          name="description"
          content="this is contact page of dev&lap website you can contact Theme"
        />
      </Head>
      <div className="container ">
        <div className="contact">
          <h1 className="title">Let&apos;s Keep in Touch</h1>
          <div className="items">
            <div className="item">
              <Image src={contactImage} width={200} height={200} alt="hero" />
            </div>
            <div className="item">
              <form onSubmit={handelSubmit}>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  onChange={handelChange}
                />
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  onChange={handelChange}
                />
                <textarea
                  type="text"
                  placeholder="message"
                  name="message"
                  onChange={handelChange}
                />
                <input className="btn" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
