import "./hero.css";
import Image from "next/image";
import hero from "./hero.png";

export const Hero = () => {
  return (
    <main className="index">
      <Image className="image" src={hero} alt="hero.png"/>
      <div className="slogan">
        <p className="LET-s-TO-TOPENG-NEW">
          LET’S TO TOPENG
          <br />
          NEW FRIENDS
          <br />
          AROUND THE
          <br />
          WORLD
        </p>
        <div className="frame-2">
          <div className="group-2" />
          <div className="text-wrapper-6">JOIN NOW</div>
        </div>
      </div>
    </main>
  );
};
