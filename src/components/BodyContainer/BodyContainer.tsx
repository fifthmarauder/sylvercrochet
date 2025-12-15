import { Box, Sparkles, Star } from "lucide-react";
import styles from "./bodyContainer.module.css";
import Button from "../common/Button/Button";
import Wave from "../common/Wave";

const BodyContainer = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.introContainer}>
            <div className={styles.headingPills}>
              <Sparkles /> Handmade with Love
            </div>
            <div className="heading">
              DISCOVER ADORABLE HANDMADE CROCHET TREASURES
            </div>
            <div className={styles.para}>
              Every stitch tells a story! Expplore our collection of lovingly
              handcrafter crochet items, from cuddly plushies to cozy blankets.
              Each piece is made with care and premium materials.
            </div>
            <div className={styles.buttonContainer}>
              <Button Icon={Box} text="Shop Now" />
              <Button
                Icon={Star}
                text="Admin Panel"
                containerStyles={{ backgroundColor: "var(--color-blue)" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Wave color="var(--color-bgLight)" />
    </>
  );
};

export default BodyContainer;
