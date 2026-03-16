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
            <div
              className={`${styles.heading} heading`}
              style={{ color: "var(--color-darkPink)" }}
            >
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
                  <div key={index}>
                    <ProductsCard product={data} />
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  textAlign: "center",

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
              CUST
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>M
              ORD
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>RS
              N<span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>W{" "}
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>
              VAILABLE
            </div>
            <div className={styles.para}>
              Cannot find what you're looking for? Place an order now to get
              your own unique custom crochet item.
            </div>
            <Button
              text="Custom Orders"
              Icon={Heart}
              onClick={() => {
                router.push("/custom-order");
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
