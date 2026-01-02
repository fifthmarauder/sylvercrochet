import Button from "@/components/common/Button/Button";
import styles from "./admin.module.css";
import { BoxIcon, DollarSign, Package, Pen, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Wave from "@/components/common/Wave";

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
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.headingContainer}>
            <div className="heading" style={{ color: "var(--color-darkPink)" }}>
              AD<span style={{ fontFamily: "var(--font-knotnoodle)" }}>M</span>
              IN D
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>
              SHBO
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
          <div className={styles.productContainer}>
            <div
              className="heading"
              style={{
                color: "var(--color-darkPink)",
                fontSize: "32px",
                textAlign: "start",
              }}
            >
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>LL
              PR
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>
              DUCTS
            </div>
            <div className={styles.table}>
              <div style={{ width: "100px" }}>Image</div>
              <div style={{ width: "180px" }}>Name</div>
              <div style={{ width: "100px" }}>Category</div>
              <div style={{ width: "100px" }}>Price </div>
              <div style={{ width: "100px" }}>Action</div>
            </div>

            <div
              style={{ borderBottom: "3px solid var(--color-primary)" }}
            ></div>
            {[1, 2, 3].map((data, index) => {
              return (
                <>
                  <div className={styles.tableContent} key={index}>
                    <div style={{ width: "100px" }}>
                      <img
                        src={"/Images/Huntrix.jpg"}
                        alt="Product"
                        className={styles.productImage}
                      />
                    </div>
                    <div
                      style={{ width: "180px" }}
                      className={styles.productName}
                    >
                      Huntrix Plushy
                    </div>
                    <div style={{ width: "100px" }}>
                      <div className={styles.productType}>Plushies</div>
                    </div>
                    <div
                      style={{ width: "100px" }}
                      className={styles.productPrice}
                    >
                      Rs. 4500{" "}
                    </div>
                    <div
                      style={{ width: "100px", display: "flex", gap: "12px" }}
                    >
                      <div className={styles.action}>
                        <Pen size={20} color="var(--color-blue)" />
                      </div>
                      <div
                        className={styles.action}
                        style={{ backgroundColor: "#f3bedaff" }}
                      >
                        <Trash2 size={20} color="red" />
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
        </div>
      </div>
      <div style={{ backgroundColor: "var(--color-surfaceBlack)" }}>
        <Wave color="var(--color-lightPink)" />
      </div>
    </>
  );
};

export default Admin;
