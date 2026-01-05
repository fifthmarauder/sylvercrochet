import { ArrowLeft } from "lucide-react";
import styles from "./cart.module.css";

const Cart = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.backButton}>
          <ArrowLeft />
          Continue Shopping
        </div>
        <div className="heading" style={{ color: "var(--color-darkPink)" }}>
          SH<span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>PPING
          C<span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>RT
        </div>
        <div className={styles.products}></div>
      </div>
    </div>
  );
};

export default Cart;
