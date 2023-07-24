import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import banner from "@/../public/banner.png";
import Button from "@/components/Button/Button";
export const metadata = {
  title: "about page",
  description: "this is about page",
};
const page = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.banner}>
        <Image src={banner} alt="banner image" />
        <div className={Styles.text}>
          <h2>Digital Storyellers</h2>
          <h3>Handcrafting award winning digital experiences</h3>
        </div>
      </div>
      <div className={Styles.bottom}>
        <div className={Styles.item}>
          <h3>Who Are We</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            consectetur voluptas nostrum reprehenderit ipsum molestiae,
            consequuntur fugiat dolor dignissimos impedit.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            tempore maxime dignissimos commodi sint, recusandae, nemo in saepe
            vel doloremque cumque! Alias, quibusdam odit obcaecati ullam
            laudantium. Voluptatem inventore error impedit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim
            ipsum autem saepe dolor nobis corporis eum ut quisquam asperiores
            dolorum ipsa, perferendis nisi aliquid ullam.
          </p>
        </div>

        <div className={Styles.item}>
          <h3>What We Do</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic autem
            cupiditate maxime. fugiat possimus laudantium saepe officia corporis
            omnis maiores suscipit et iusto ipsa? Ea quaerat atque veritatis
            accusantium suscipit aliquid?
          </p>
          <ul>
            <li>- Creative illustrations</li>
            <li>- Dynamic websites</li>
            <li>- Fast and Handy Mobile Apps</li>
          </ul>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default page;
