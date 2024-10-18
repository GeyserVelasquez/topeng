"use client"; // Indica que este es un Client Component

import "./hero.css";
import Image from "next/image";
import hero from "./hero.png";
import { MyButtom } from "../myButton/myButtom";

export const Hero = () => {
  return (
    <main className="index">
      <Image className="image" src={hero} alt="hero.png" />
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
          <MyButtom
            text="JOIN NOW"
            white={true}
            className="group-2"
            onClick={() => alert("Button clicked!")} // El onClick debe estar aquí
          />
        </div>
      </div>
    </main>
  );
};
