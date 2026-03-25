"use client";
import { Funnel, Search } from "lucide-react";
import styles from "./shop.module.css";
import { useEffect, useState } from "react";
import ProductsCard from "@/components/common/ProductsCard/ProductsCard";
import Wave from "@/components/common/Wave";
import { Categories } from "@/components/common/categories";
import { api } from "../api";
import { toast } from "react-toastify";

const pills = ["All", ...Categories];

const Shop = () => {
  const [selectedTab, setSelectedTab] = useState(pills[0]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedTab, products, searchQuery]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/api/users/adminProducts");
      setProducts(response.data);
    } catch (error: any) {
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    if (selectedTab !== "All") {
      filtered = filtered.filter(
        (product: any) => product.category === selectedTab,
      );
    }

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredProducts(filtered);
  };
  return (
    <>
      {" "}
      <div className={styles.main}>
        <div className={styles.container}>
          <div
            className={`heading ${styles.heading}`}
            style={{ color: "var(--color-darkPink)" }}
          >
            O<span style={{ fontFamily: "var(--font-knotnoodle)" }}>U</span>R
            CROC
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>H</span>ET SH
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>P
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
            {loading ? (
              <div className={styles.loaderContainer}>
                <div className={styles.loader} />
              </div>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((data: any) => (
                <div key={data._id}>
                  <ProductsCard product={data} />
                </div>
              ))
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
          <div
            className={styles.para}
            style={{ fontSize: "16px", marginTop: "32px" }}
          >
            Showing {filteredProducts.length} of {products.length} products
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
