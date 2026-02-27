import { ArrowLeft } from "lucide-react";
import styles from "./cart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
        <div className={styles.productsContainer}>
          <div className={styles.products}>
            <div className={styles.productLeft}>
              <img
                src={"/Images/Huntrix.jpg"}
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <div className={styles.productName}>Huntrix set</div>
                <div className={styles.productCategory}>Category</div>
                <div className={styles.actionButtons}>
                  <AddIcon
                    sx={{
                      color: "var(--color-darkPink)",
                      backgroundColor: "var(--color-lightPink)",
                      borderRadius: "999px",
                      padding: "6px",
                    }}
                  />
                  <RemoveIcon
                    sx={{
                      color: "var(--color-darkPink)",
                      backgroundColor: "var(--color-lightPink)",
                      borderRadius: "999px",
                      padding: "6px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.productRight}>
              <div> trash</div>
              <div>
                <div>28 each</div>
                <div>28.99</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
