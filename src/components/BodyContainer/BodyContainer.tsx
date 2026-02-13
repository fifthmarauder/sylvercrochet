"use client";

import { Box, Sparkles, Star } from "lucide-react";
import styles from "./bodyContainer.module.css";
import Button from "../common/Button/Button";
import Wave from "../common/Wave";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BodyContainer = () => {
  const router = useRouter();
  const cardContent = [
    {
      label: "MADE WITH LOVE",
      description:
        "Each item is carefully handcrafted with attention to detail.",
    },
    {
      label: "PREMIUM QUALITY",
      description: "We use only the finest, hypoallergic yarns and materials.",
    },
    {
      label: "FAST SHIPPING",
      description: "Carefully packaged and shipped with love to your door.",
    },
  ];
  return (
    <>
      <div className={styles.main}>
        <Image
          src={"/Images/spiderverse.png"}
          height={800}
          width={700}
          alt="CrochetImage"
          style={{ position: "absolute", top: "0px", right: "70px" }}
          className={styles.spiderverseImage}
        />
        {/* <div className={styles.container}> */}
        <div className={styles.introContainer}>
          <div className={styles.headingPills}>
            <Sparkles /> Handmade with Love
          </div>
          <div className="heading" style={{ textAlign: "start" }}>
            DISC
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>VER
            ADOR
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>BLE
            HAND
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>M</span>ADE
            CR<span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>C
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>H</span>ET
            TREAS
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>U</span>
            RES
          </div>
          <div className={styles.para} style={{ textAlign: "start" }}>
            Every stitch tells a story! Expplore our collection of lovingly
            handcrafter crochet items, from cuddly plushies to cozy blankets.
            Each piece is made with care and premium materials.
          </div>
          <div className={styles.buttonContainer}>
            <Button
              Icon={Box}
              text="Shop Now"
              onClick={() => {
                router.push("/shop");
              }}
            />
            <Button
              Icon={Star}
              text="Admin Panel"
              containerStyles={{ backgroundColor: "var(--color-blue)" }}
              onClick={() => {
                router.push("/admin");
              }}
            />
          </div>
        </div>
        {/* <div className={styles.cardRow}>
            {cardContent.map((data, index) => {
              return (
                <div className={styles.cardStyle} key={index}>
                  <div className={styles.cardHeading}>{data.label}</div>
                  <div className={styles.cardPara}>{data.description}</div>
                </div>
              );
            })}
          </div> */}
      </div>
      {/* </div> */}
      <div style={{ backgroundColor: "var(--color-lightPink" }}>
        <Wave color="var(--color-bgLight)" />
      </div>
    </>
  );
};

export default BodyContainer;
