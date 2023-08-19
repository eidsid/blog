import React from "react";
import "./style.scss";
import Image from "next/image";
import apps from "@/../public/apps.jpg";
export const metadata = {
  title: "Dev digtal Agency about page",
  description:
    "this about page Dev digtal Agency website provide web development services",
};
const page = () => {
  return (
    <div className="about container">
      <div className="top">
        <Image src={apps} fill alt="banner image" />
        <div className="content">
          <div className="wrapper">
            <h1>Dev digtal Agency about page</h1>
            <p>
              this about page Dev digtal Agency website provide web development
              services
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="col">
          <h1>Whow Are We</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nostrum quibusdam praesentium impedit eligendi non ratione enim?
            Iste tempore minus ad non laboriosam nostrum reiciendis? Atque ea
            illum a dolorem!
          </p>
        </div>
        <div className="col">
          <h1>Whate We Do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nostrum quibusdam praesentium impedit eligendi non ratione enim?
            Iste tempore minus ad non laboriosam nostrum reiciendis? Atque ea
            illum a dolorem! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Debitis nostrum quibusdam praesentium impedit eligendi non
            ratione
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
