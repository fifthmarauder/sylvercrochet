"use client";
import { Heart } from "lucide-react";
import styles from "./aboutUs.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1280);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const story = [
    {
      heading: "A little about me 🌸",
      para: "Hi, my name is Sarah or Silvermyst to my online friends. I’m a dentist, and yes with my studies and workload I do enjoy playing  video games and most importantly crocheting. I love that I get to practice fine work and skills not only in my career but also my hobby. ",
      image: "/Images/About1.jpg",
      style: "row",
    },
    {
      heading: "How I started crocheting 🧶",
      para: "I love a challenge and I was obsessed with those crochet minecraft honeybees I saw all over pinterest, that inspired me but not enough to actually buy supplies and start learning. It was the day me and my best friend were colouring in a mandala colouring book and we both decided to learn to crochet. That night I finally bought the supplies. I started with a amigurami octopus, little did I know my first project would not be the length of a 20 min youtube video but would actually take more than 2 hours to make. In short, I didn’t know the basics and jumped right into the most complex thing, I learnt as I went. So yeah I jump into waters before testing it but somehow I manage and swim.",
      image: "/Images/About2.jpg",
      style: "row-reverse",
    },
    {
      heading: "How it turned into a business 📈",
      para: "Soon enough I got addicted to crocheting and made so many plushies that I had no place to store them. People use to compliment and suggest I start selling them I was always skeptical. The butterfly effect started when I made my first ever doll and wrote my own pattern. I took my first ever Arcane Jinx doll to a comic con and all my friends supported and pushed me to start selling. In March 2025 I finally made a crochet account and 2 weeks later I finally started getting orders.",
      image: "/Images/About3.jpg",
      style: "row",
    },
    {
      heading: "How it's going 🧶",
      para: "Now I have a running crochet business where I get to make amazing dolls for you guys. I also do popups at comic cons where I meet talented cosplayers, weebs and gamers who support and love my work. Thank you and I love you guys",
      image: "/Images/About4.jpg",
      style: "row-reverse",
    },
  ] as const;
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Heart className={styles.icon} size={64} />
        <div
          className={`heading ${styles.heading}`}
          style={{ color: "var(--color-darkPink)" }}
        >
          ABOUT ME
        </div>
        <div className={styles.para}>Here's a sneak peak of my journey</div>

        <div className={styles.wrapper}>
          {story.map((data) => {
            return (
              <div
                key={data.heading}
                className={styles.section}
                style={{ flexDirection: isMobile ? "column" : data.style }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div className={`heading ${styles.subHeading}`}>
                    {data.heading}
                  </div>
                  <div className={styles.description}>{data.para}</div>
                </div>
                <Image
                  src={data.image}
                  alt={data.heading}
                  width={500}
                  height={470}
                  className={styles.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
