import React from "react";

import Link from "next/link";
export const metadata = {
  title: "portofolio page",
  description:
    "this is portofolio page contain all the dev&Lap projects tecknology websites",
};
const page = () => {
  return (
    <>
      <div className="portoflio">
        <div className="item">
          <Link href="/portfolio/illustrations" className="card">
            <h2 className="title"> illustrations</h2>
          </Link>
        </div>
        <div className="item">
          <Link href="/portfolio/websites" className="card">
            <h2 className="title"> websites</h2>
          </Link>
        </div>
        <div className="item">
          <Link href="/portfolio/applicatoins" className="card">
            <h2 className="title">applicatoins</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
