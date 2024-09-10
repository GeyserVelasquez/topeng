import "./hero.css";
import Image from "next/image";
import hero from "./hero.png";

export const Hero = () => {
  return (
    <div className="index">
      <Image src={hero} alt="hero.png" height={612} width={705} />
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
    </div>
  );
};
