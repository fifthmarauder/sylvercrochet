import Button from "@/components/common/Button/Button";
import styles from "./admin.module.css";
import { BoxIcon, DollarSign, Package, Plus } from "lucide-react";

const Admin = () => {
  const cardDetails = [
    {
      Icon: Package,
      title: "Total Products",
      bgColor: "#fff1f2",
      color: "var(--color-darkPink)",
    },
    {
      Icon: DollarSign,
      title: "Inventory Value",
      bgColor: "#ebf8ff",
      color: "var(--color-blue)",
    },
    {
      Icon: BoxIcon,
      title: "Total Stock",
      bgColor: "#faf5ff",
      color: "#8d128dff",
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <div className="heading" style={{ color: "var(--color-darkPink)" }}>
            AD<span style={{ fontFamily: "var(--font-knotnoodle)" }}>M</span>IN
            D<span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>SHBO
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>RD
          </div>
          <Button text="Add New Product " Icon={Plus} />
        </div>
        <div className={styles.cardContainer}>
          {cardDetails.map((data, index) => {
            return (
              <div
                className={styles.card}
                style={{ backgroundColor: `${data.bgColor}` }}
                key={index}
              >
                <div
                  className={styles.iconContainer}
                  style={{ backgroundColor: `${data.color}` }}
                >
                  <data.Icon color="white" size={32} />
                </div>
                <div className={styles.cardInfo}>
                  <div>{data.title}</div>
                  <div style={{ color: `${data.color}`, fontSize: "24px" }}>
                    5
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin;
