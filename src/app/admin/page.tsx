"use client";
import Button from "@/components/common/Button/Button";
import styles from "./admin.module.css";
import {
  Box,
  BoxIcon,
  DollarSign,
  Package,
  Pen,
  Plus,
  Trash2,
} from "lucide-react";
import Wave from "@/components/common/Wave";
import { Close, Inventory } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api";

const Admin = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(true);
  const [images, setImages] = useState("");
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalStock: 0,
    inventoryValue: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get("/api/users/stats");
      setStats(response.data);
    } catch (error: any) {
      toast.error("Failed to fetch statistics");
    }
  };
  const cardDetails = [
    {
      Icon: Package,
      title: "Total Products",
      bgColor: "#fff1f2",
      color: "var(--color-darkPink)",
      value: stats.totalProducts,
    },
    {
      Icon: DollarSign,
      title: "Inventory Value",
      bgColor: "#ebf8ff",
      color: "var(--color-blue)",
      value: `Rs. ${stats.inventoryValue.toLocaleString()}`,
    },
    {
      Icon: BoxIcon,
      title: "Total Stock",
      bgColor: "#faf5ff",
      color: "#8d128dff",
      value: stats.totalStock,
    },
  ];

  const handleAddProduct = async () => {
    if (!name || !category || !description || !price || !images) {
      toast.error("Please fill all required fields");
      return;
    }
    try {
      await api.post("/api/users/addProduct", {
        name,
        category,
        description,
        price,
        stock,
        images,
      });
      toast.success("Added successfully");
      setOpenDrawer(false);
      fetchStats();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to add product");
    }
  };
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
            <Button
              text="Add New Product "
              Icon={Plus}
              onClick={() => {
                setOpenDrawer(true);
              }}
            />
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
                      {data.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {openDrawer && (
            <div className={styles.addProductContainer}>
              <div
                className="heading"
                style={{
                  color: "var(--color-darkPink)",
                  fontSize: "32px",
                  textAlign: "start",
                }}
              >
                <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>
                DD N
                <span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>W
                PR
                <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>
                DUCT
              </div>
              <div className={styles.inputField}>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      gap: "8px",
                    }}
                  >
                    <div className={styles.inputTitle}>Name *</div>
                    <input
                      className={styles.inputLine}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      gap: "8px",
                    }}
                  >
                    <div className={styles.inputTitle}>Category *</div>
                    <input
                      className={styles.inputLine}
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "8px",
                  }}
                >
                  <div className={styles.inputTitle}>Description *</div>
                  <textarea
                    className={styles.inputLine}
                    value={description}
                    style={{ height: "15vh" }}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      gap: "8px",
                    }}
                  >
                    <div className={styles.inputTitle}>Price *</div>
                    <input
                      className={styles.inputLine}
                      value={price}
                      type="number"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      gap: "8px",
                    }}
                  >
                    <div className={styles.inputTitle}>Stock</div>
                    <select
                      className={styles.inputLine}
                      value={stock ? "true" : "false"}
                      onChange={(e) => {
                        setStock(e.target.value === "true");
                      }}
                    >
                      {" "}
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      gap: "8px",
                    }}
                  >
                    <div className={styles.inputTitle}>Image Url *</div>
                    <input
                      className={styles.inputLine}
                      value={images}
                      onChange={(e) => {
                        setImages(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <Button
                  text="Add Product"
                  Icon={Box}
                  containerStyles={{ width: "fit-content" }}
                  onClick={() => {
                    handleAddProduct();
                  }}
                />
                <Button
                  text="Cancel"
                  Icon={Close}
                  containerStyles={{
                    width: "fit-content",
                    backgroundColor: "var(--color-blue)",
                  }}
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                />
              </div>
            </div>
          )}
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
                <div key={index}>
                  <div className={styles.tableContent}>
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
                </div>
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
