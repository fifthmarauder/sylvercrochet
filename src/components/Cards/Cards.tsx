import Wave from "../common/Wave";
import styles from "./cards.module.css";

const Cards = () => {
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
        <div className={styles.container}>
          {cardContent.map((data, index) => {
            return (
              <div className={styles.cardStyle} key={index}>
                <div className={styles.cardHeading}>{data.label}</div>
                <div className={styles.cardPara}>{data.description}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ backgroundColor: "var(--color-lightPink)" }}>
        <Wave color="var(--color-secondary)" />
      </div>
    </>
  );
};

export default Cards;
