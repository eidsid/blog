import Image from "next/image";
import styles from "./page.module.css";
import heroImage from "@/../public/hero.png";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1>Better design for your digital products.</h1>
        <p>
          Turning your idea into reality. we bring together the teams from the
          global tech industry
        </p>

        <Button text="See Our Works" url="/portfolio" />
      </div>

      <div className={styles.item}>
        <Image
          className={styles.img}
          src={heroImage}
          width={300}
          height={300}
          alt="heroimage"
        />
      </div>
    </main>
  );
}
