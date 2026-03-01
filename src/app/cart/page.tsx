import { ArrowLeft } from "lucide-react";
import styles from "./cart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Button from "@/components/common/Button/Button";
import CreditCardIcon from "@mui/icons-material/CreditCard";

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
            {[1, 2, 3].map(() => {
              return (
                <>
                  <div className={styles.product}>
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
                        <div className={styles.productCategory}>
                          $28.99 each
                        </div>
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
                  <div
                    style={{ border: "1px solid rgba(240, 240, 240, 1)" }}
                  ></div>
                </>
              );
            })}
          </div>
          <div className={styles.checkoutContainer}>
            <div
              className="heading"
              style={{ fontSize: "32px", color: "var(--color-darkPink)" }}
            >
              ORD<span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>
              R SUM
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>M</span>ARY
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div
                className={styles.productCategory}
                style={{ fontSize: "18px", justifyContent: "space-between" }}
              >
                <div>Sub Total(1 items)</div>
                <div>$28.99</div>
              </div>
              <div
                className={styles.productCategory}
                style={{ fontSize: "18px", justifyContent: "space-between" }}
              >
                <div>Shipping</div>
                <div>Free</div>
              </div>
            </div>
            <div style={{ border: "1px solid var(--color-darkPink)" }}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className={styles.productCategory}
                style={{ fontSize: "18px" }}
              >
                Total
              </div>
              <div
                style={{
                  color: "var(--color-darkPink)",
                  fontWeight: "800",
                  fontSize: "32px",
                  textAlign: "right",
                }}
              >
                28.99
              </div>
            </div>
            <Button
              text="Proceed to checkout"
              Icon={CreditCardIcon}
              containerStyles={{ display: "flex", justifyContent: "center" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
