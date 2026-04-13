"use client";

import { Box, Sparkles, Star } from "lucide-react";
import styles from "./bodyContainer.module.css";
import Button from "../common/Button/Button";
import Wave from "../common/Wave";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BodyContainer = () => {
  const router = useRouter();

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
        <div className={styles.introContainer}>
          <div className={styles.headingPills}>
            <Sparkles /> Handmade with Love
          </div>
          <div className={`${styles.heading} heading`}>
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
          <div className={styles.para}>
            Every stitch tells a story! Explore our collection of loving crochet
            items of anime & game characters, plushies and cute keychains. Each
            amigurami is handmade with love and care.
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
              text="FAQs"
              containerStyles={{ backgroundColor: "var(--color-blue)" }}
              onClick={() => {
                router.push("/faqs");
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "var(--color-lightPink)" }}>
        <Wave color="#f6edda" />
      </div>
    </>
  );
};

export default BodyContainer;
