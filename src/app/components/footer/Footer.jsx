import React from "react";
import "./footer.scss";
import Image from "next/image";

import facebook from "@/../public/1.png";
import instagram from "@/../public/2.png";
import twitter from "@/../public/3.png";
import youtube from "@/../public/4.png";

const Footer = () => {
  let socalImages = [
    { image: facebook, alt: "facebook", url: "https://www.facebook.com/" },
    { image: instagram, alt: "instagram", url: "https://www.instagram.com/" },
    { image: twitter, alt: "twitter", url: "https://www.twitter.com/" },
    { image: youtube, alt: "youtube", url: "https://www.youtube.com/" },
  ];
  return (
    <div className="footer">
      <div className="copay">@2023 Dev, All rights reserved.</div>
      <div className="socalImages">
        {socalImages.map(({ image, alt, url }, index) => {
          return (
            <a href={url} key={index}>
              <Image src={image.src} width={20} height={20} alt={alt} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
