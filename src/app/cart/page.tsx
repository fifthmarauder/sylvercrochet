import { ArrowLeft } from "lucide-react";
import styles from "./cart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.backButton}>
          <ArrowLeft />
          Continue Shopping
        </div>
        <div
          className="heading"
          style={{ color: "var(--color-darkPink)", alignSelf: "self-start " }}
        >
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
              <DeleteOutlineOutlinedIcon
                sx={{
                  color: "var(--color-darkPink)",
                  fontSize: "28px",
                }}
                style={{ display: "flex", alignSelf: "end" }}
              />
              <div>
                <div className={styles.productCategory}>$28.99 each</div>
                <div
                  style={{
                    color: "var(--color-darkPink)",
                    fontWeight: "800",
                    fontSize: "24px",
                    textAlign: "right",
                  }}
                >
                  28.99
                </div>
              </div>
            </div>
          </div>
          <div className={styles.checkoutContainer}>
            <div>ORDER SUMMARY</div>
            <div>
              <div>Sub Total</div>
              <div>Sub Total</div>
            </div>
            <div>line</div>
            <div>total</div>
            <div>proceed to checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
