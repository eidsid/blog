"use client";
import { useContext } from "react";
import styles from "./Theme.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Theme = () => {
  const { Mode, toggle } = useContext(ThemeContext);
  const Icons = ["🌚", "🌝"];
  return (
    <div className={styles.container}>
      <div
        className={`${Mode === "light" ? styles.light : styles.dark} ${
          styles.ball
        }`}
        onClick={() => toggle()}
      >
        {Mode === "light" ? Icons[1] : Icons[0]}
      </div>
    </div>
  );
};
export default Theme;
