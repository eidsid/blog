"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import "./style.scss";
const Theme = () => {
  const { Mode, toggleTheme } = useContext(ThemeContext);
  const Icons = ["🌚", "🌝"];
  return (
    <div className="ballContainer">
      <div
        className={`ball ${Mode === "light" ? "light" : "dark"} `}
        onClick={() => toggleTheme()}
      >
        {Mode === "light" ? Icons[1] : Icons[0]}
      </div>
    </div>
  );
};
export default Theme;
