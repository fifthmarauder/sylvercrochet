"use client";
import { Funnel, Search } from "lucide-react";
import styles from "./shop.module.css";
import { useState } from "react";
import ProductsCard from "@/components/common/ProductsCard/ProductsCard";
import Wave from "@/components/common/Wave";

const pills = ["All", "Plushies", "Yarn", "Bags", "Blankets"];

const Shop = () => {
  const [selectedTab, setSelectedTab] = useState(pills[0]);
  return (
    <>
      {" "}
      <div className={styles.main}>
        <div className={styles.container}>
          <div className="heading" style={{ color: "var(--color-darkPink)" }}>
            O<span style={{ fontFamily: "var(--font-knotnoodle)" }}>U</span>R
            CROC
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>H</span>ET C
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>LL
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>CTION
          </div>
          <div className={styles.para}>
            Browse our complete collection of handmade crochet treasures. Each
            piece is crafted with love and care!
          </div>
          <div className={styles.searchBoxContainer}>
            <Search color="var(--color-darkPink)" />
            <input
              placeholder="Search for products.."
              type="text"
              className={styles.input}
            ></input>
          </div>
          <div className={styles.pillsContainer}>
            <div className={styles.pillsHeader}>
              <Funnel /> Filter:
            </div>

            {pills.map((data, index) => {
              return (
                <div
                  key={index}
                  className={styles.pills}
                  onClick={() => {
                    setSelectedTab(pills[index]);
                  }}
                  style={
                    selectedTab == data
                      ? {
                          backgroundColor: "var(--color-darkPink)",
                          border: "none",
                          color: "white",
                          fontWeight: "600",
                        }
                      : {}
                  }
                >
                  {data}
                </div>
              );
            })}
          </div>
          <div className={styles.productContainer}>
            {[1, 2, 3, 4, 5].map((data, index) => {
              return (
                <div key={index}>
                  <ProductsCard />
                </div>
              );
            })}
          </div>
          <div
            className={styles.para}
            style={{ fontSize: "16px", marginTop: "32px" }}
          >
            Showing 5 of 5 products
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "var(--color-surfaceBlack)" }}>
        <Wave color="var(--color-lightPink)" />
      </div>
    </>
  );
};

export default Shop;
