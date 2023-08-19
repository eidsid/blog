"use client";

import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [Mode, setMode] = useState("dark");
  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, Mode }}>
      <div className={`theme ${Mode}`}> {children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
