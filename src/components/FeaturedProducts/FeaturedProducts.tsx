"use client";
import { Heart, ShoppingCart, Sparkles } from "lucide-react";
import Button from "../common/Button/Button";
import styles from "./featuredproducts.module.css";
import Wave from "../common/Wave";
import ProductsCard from "../common/ProductsCard/ProductsCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/app/api";
import { toast } from "react-toastify";

const FeaturedProducts = () => {
  const router = useRouter();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/api/users/featured");
      setProduct(response.data);
    } catch (error: any) {
      toast.error("Failed to fetch products");
    }
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className="heading" style={{ color: "var(--color-darkPink)" }}>
              FEAT
              <span style={{ fontFamily: "var(--font-knotnoodle" }}>U</span>RED
              PR<span style={{ fontFamily: "var(--font-knotnoodle" }}>O</span>
              DUCTS
            </div>
            <div className={styles.para}>
              Check out our most popular handmade items.
            </div>
          </div>
          <div className={styles.productContainer}>
            {product.length > 0 ? (
              product.map((data, index) => {
                return (
                  <div key={index} className={styles.productCard}>
                    <ProductsCard product={data} />
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px",
                  width: "100%",
                  color: "var(--color-darkPink)",
                }}
              >
                No products found
              </div>
            )}
          </div>
          <Button
            text="View All Products"
            Icon={Sparkles}
            onClick={() => {
              router.push("/shop");
            }}
            containerStyles={{
              flexDirection: "row-reverse",
              marginBottom: "64px",
              backgroundColor: "var(--color-blue)",
            }}
          />
          <div className={styles.exploreShopContainer}>
            <div className={styles.exploreHeading}>
              ST<span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>
              RT YO
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>U</span>R
              CR<span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>
              CHET JOURN
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>Y T
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>DAY
            </div>
            <div className={styles.para}>
              Whether you're looking for a unique gift or treating yourself, our
              handmade crochet items bring warmth and joy to any space
            </div>
            <Button
              text="Explore Our Shop"
              Icon={Heart}
              onClick={() => {
                router.push("/shop");
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "var(--color-surfaceBlack)" }}>
        {" "}
        <Wave color="var(--color-lightPink)" />
      </div>
    </>
  );
};

export default FeaturedProducts;
