import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
export const metadata = {
  title: "portofolio page",
  description:
    "this is portofolio page contain all the dev&Lap projects tecknology websites",
};
const page = () => {
  return (
    <div>
      <h2 className={styles.mainTitle}>Choose a gallery</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <Link href="/portfolio/illustrations" className="card">
            <h2 className={styles.title}> illustrations</h2>
          </Link>
        </div>
        <div className={styles.item}>
          <Link href="/portfolio/websites" className="card">
            <h2 className={styles.title}> websites</h2>
          </Link>
        </div>
        <div className={styles.item}>
          <Link href="/portfolio/applicatoins" className="card">
            <h2 className={styles.title}>applicatoins</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
