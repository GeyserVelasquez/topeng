import "./about.css";
import asian from "./asian.png";
import Image from "next/image";


export default function About () {
  return (
    <section className="about-us">
      <h1 className="text-wrapper-6">About Us</h1>
      <div className="frame">
        <article className="paragraph">
          <h2 className="text-wrapper-7">Our Thougths</h2>
          <p className="text span">
            Topeng is more than just a social media platform; it&#39;s a
            community where you can connect with like-minded individuals, share
            your passions, and create lasting friendships. With Topeng, you can
            discover new people, join groups, and build a network that supports
            and inspires you.
            <br />
            Topeng is a space for authentic self-expression. Share your
            thoughts, feelings, and experiences with the world without fear of
            judgment. Our platform empowers you to be your true self and connect
            with others on a deeper level.
            <br />
            Topeng is your one-stop shop for fun and entertainment. Discover new
            music, watch the latest videos, and play games with friends. With
            our constantly evolving features, there&#39;s always something new
            to explore on Topeng.
            <br />
            Topeng is a platform that celebrates diversity and inclusivity. We
            welcome people from all walks of life and believe that everyone
            should have a voice. Join our community and connect with people from
            around the world.
          </p>
        </article>
        <Image src={asian} alt="asian.png" height={602} width={184} />
        <article className="paragraph">
          <h2 className="text-wrapper-7">Our Founder</h2>
          <p className="text">
            A native of Java, Adi grew up fascinated by technology and the
            ancient legends of his island. Combining his passion for programming
            with a deep respect for Javanese traditions, he created Topeng to
            bridge the digital and cultural worlds. His vision is to build a
            global community where people can share their stories and ideas
            without borders.
            <br />
            Developing Topeng was no easy feat. Adi faced numerous technical and
            cultural challenges. However, his determination and passion led him
            to build a platform that has connected millions of people worldwide.
            <br />
            With Topeng, Adi aims to create a space where technological
            innovation meets ancestral wisdom. His vision is for Topeng to
            become a global community that values diversity, creativity, and
            human connection.
            <br />
            Adi, a Javanese programmer, founded Topeng with a mission to connect
            people through technology while preserving cultural heritage.
            Inspired by the traditions of his homeland, he created a platform
            where individuals can share their stories and celebrate diversity.
          </p>
        </article>
      </div>
    </section>
  );
};
