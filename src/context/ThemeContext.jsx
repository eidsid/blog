"use client";
import "@/app/globals.css";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [Mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, Mode }}>
      <div className={`theme ${Mode}`}> {children}</div>
    </ThemeContext.Provider>
  );
};
