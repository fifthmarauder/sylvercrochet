import { Sparkles } from "lucide-react";
import styles from "./bodyContainer.module.css";

const BodyContainer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.introContainer}>
          <div className={styles.headingPills}>
            <Sparkles /> Handmade with Love
          </div>
          <div>DISCOVER ADORABLE HANDMADE CROCHET TREASURES</div>
          <div>
            Every stitch tells a story! Expplore our collection of lovingly
            handcrafter crochet items, from cuddly plushies to cozy blankets.
            Each piece is made with care and premium materials.
          </div>
          <div>
            <div>Shop Now</div>
            <div>Admin Panel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContainer;
