import styles from "./checkout.module.css";

const Checkout = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className="heading" style={{ color: "var(--color-darkPink)" }}>
          CH<span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>CK
          <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>UT
        </div>

        <div className={styles.boxContainer}>
          {/* left containers */}
          <div className={styles.borderBoxContainer}>
            <div className={styles.borderBox}>
              <div
                className="heading"
                style={{ color: "var(--color-darkPink)", fontSize: "32px" }}
              >
                CUSTOMER INFORMATION
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div style={{ display: "flex", gap: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      width: "100%",
                    }}
                  >
                    <div className={styles.inputTitle}>Full Name</div>
                    <input className={styles.inputField} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      width: "100%",
                    }}
                  >
                    <div className={styles.inputTitle}>Email</div>
                    <input className={styles.inputField} />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <div className={styles.inputTitle}>City</div>
                  <input className={styles.inputField} />
                </div>
              </div>
            </div>
            <div className={styles.borderBox}>
              <div
                className="heading"
                style={{ color: "var(--color-darkPink)", fontSize: "32px" }}
              >
                SHIPPING ADDRESS
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <div className={styles.inputTitle}>City</div>
                  <input className={styles.inputField} />
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      width: "100%",
                    }}
                  >
                    <div className={styles.inputTitle}>City</div>
                    <input className={styles.inputField} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      width: "100%",
                    }}
                  >
                    <div className={styles.inputTitle}>Zip Code</div>
                    <input className={styles.inputField} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right container(order summary) */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
