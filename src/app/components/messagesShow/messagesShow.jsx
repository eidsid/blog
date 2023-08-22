import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from "axios";
import date from "@/app/utils/date";

const MessagesShow = () => {
  const [messages, setMessages] = useState([]);
  const updatemessages = async () => {
    const messages = await axios.get("/api/contact/");
    setMessages(messages.data);
  };
  const handelDelete = async (id) => {
    let acceptance = confirm(" Are You Sure");
    if (acceptance) {
      await axios.delete(`/api/contact/${id}`);
      updatemessages();
    }
  };
  useEffect(() => {
    updatemessages();
  }, []);

  return (
    <div className="MessagesShow">
      {messages.map(({ createdAt, name, email, _id, message }) => (
        <div className="message" key={_id}>
          <div className="message-header">
            <span className="message-name">{name}</span>
            <span className="message-date">{date(createdAt)}</span>
          </div>
          <div className="message-content">
            <div className="message-email">{email}</div>
            <div className="message-text">{message}</div>
          </div>
          <button className="btn delete" onClick={() => handelDelete(_id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MessagesShow;
