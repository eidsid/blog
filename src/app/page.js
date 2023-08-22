import Image from "next/image";
import heroImage from "@/../public/hero.png";
import "./styles/page.scss";
import Button from "./components/button/Button";
export default function Home() {
  return (
    <main className="container home">
      <div className="left">
        <h1>Better design for your digital products.</h1>
        <p>
          Turning your idea into reality. we bring together the teams from the
          global tech industry
        </p>
        <Button url={"/contact"} text={"Contact us"} />
      </div>

      <div className="right">
        <Image
          className="img"
          src={heroImage}
          width={300}
          height={300}
          alt="hero image"
        />
      </div>
    </main>
  );
}
