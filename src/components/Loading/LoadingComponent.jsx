"use client";
import { useState, useEffect } from "react";
import styles from "./Loading.module.css";

const LoadingComponent = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) {
          return "";
        } else {
          return prev + ".";
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Loading{dots}</h1>
    </div>
  );
};

export default LoadingComponent;
