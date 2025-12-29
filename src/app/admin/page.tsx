import Button from "@/components/common/Button/Button";
import styles from "./admin.module.css";
import { BoxIcon, DollarSign, Package, Plus } from "lucide-react";

const Admin = () => {
  const cardDetails = [
    {
      icon: { Package },
      title: "Total Products",
      bgColor: "var(--color-bgLight)",
    },
    {
      icon: { DollarSign },
      title: "Inventory Value",
      bgColor: "var(--color-secondary)",
    },
    {
      icon: { BoxIcon },
      title: "Total Stock",
      bgColor: "var(--color-lilac)",
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
          <div
            className={styles.card}
            style={{ backgroundColor: "var(--color-bgLight)" }}
          >
            <div className={styles.iconContainer}>
              <Package color="white" size={32} />
            </div>
            <div className={styles.cardInfo}>
              <div>Total Products</div>
              <div style={{ color: "var(--color-darkPink)", fontSize: "24px" }}>
                5
              </div>
            </div>
          </div>
          <div>Inventory Values</div>
          <div>Total Stock</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
