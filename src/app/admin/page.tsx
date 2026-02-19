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
import { Categories } from "@/components/common/categories";

const Admin = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(true);
  const [images, setImages] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalStock: 0,
    inventoryValue: 0,
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchStats();
    fetchProducts();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get("/api/users/stats");
      setStats(response.data);
    } catch (error: any) {
      toast.error("Failed to fetch statistics");
    }
  };

  const clearForm = () => {
    setName("");
    setCategory("");
    setDescription("");
    setPrice("");
    setStock(true);
    setIsFeatured(false);
    setImages("");
    setIsEditMode(false);
    setEditingProductId(null);
  };
  const fetchProducts = async () => {
    try {
      const response = await api.get("/api/users/adminProducts");
      setProducts(response.data);
    } catch (error: any) {
      toast.error("Failed to fetch products");
    }
  };

  const handleAddProduct = async () => {
    if (!name || !category || !description || !price || !images) {
      toast.error("Please fill all required fields");
      return;
    }
    try {
      if (isEditMode && editingProductId) {
        await api.put(`/api/users/updateProduct/${editingProductId}`, {
          name,
          category,
          description,
          price: Number(price),
          isFeatured,
          stock,
          images,
        });
        toast.success("Product updated successfully");
      } else {
        await api.post("/api/users/addProduct", {
          name,
          category,
          description,
          price,
          isFeatured,
          stock,
          images,
        });
        toast.success("Added successfully");
      }
      setOpenDrawer(false);
      clearForm();
      fetchStats();
      fetchProducts();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to add product");
    }
  };

  const handleEdit = async (product: any) => {
    setName(product.name);
    setCategory(product.category);
    setDescription(product.description);
    setPrice(product.price.toString());
    setStock(Boolean(product.stock));
    setImages(product.images);
    setIsFeatured(product.isFeatured || false);
    setIsEditMode(true);
    setEditingProductId(product._id);
    setOpenDrawer(true);
  };

  const handleDelete = async (productId: string) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      await api.delete(`/api/users/deleteProduct/${productId}`);
      toast.success("Product deleted successfully");
      fetchProducts();
      fetchStats();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to delete product");
    }
  };
  const handleCancel = () => {
    setOpenDrawer(false);
    clearForm();
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
                clearForm();
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
                {isEditMode ? (
                  <>
                    <span style={{ fontFamily: "var(--font-knotnoodle)" }}>
                      E
                    </span>
                    DIT PR
                    <span style={{ fontFamily: "var(--font-knotnoodle)" }}>
                      O
                    </span>
                    DUCT
                  </>
                ) : (
                  <>
                    <span style={{ fontFamily: "var(--font-knotnoodle)" }}>
                      A
                    </span>
                    DD N
                    <span style={{ fontFamily: "var(--font-knotnoodle)" }}>
                      E
                    </span>
                    W PR
                    <span style={{ fontFamily: "var(--font-knotnoodle)" }}>
                      O
                    </span>
                    DUCT
                  </>
                )}
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
                    <select
                      className={styles.inputLine}
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    >
                      <option value="">Select a Category</option>
                      {Categories.map((data) => {
                        return (
                          <option key={data} value={data}>
                            {data}
                          </option>
                        );
                      })}
                    </select>
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
                    <div className={styles.inputTitle}>Featured</div>
                    <select
                      className={styles.inputLine}
                      value={isFeatured ? "true" : "false"}
                      onChange={(e) => setIsFeatured(e.target.value === "true")}
                    >
                      <option value="false">No</option>
                      <option value="true">Yes</option>
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
                  text={isEditMode ? "Update Product" : "Add Product"}
                  Icon={Box}
                  containerStyles={{ width: "fit-content" }}
                  onClick={() => {
                    handleAddProduct();
                    console.log(stock);
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
                    handleCancel();
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
            {products.length > 0 ? (
              products.map((data: any, index) => {
                return (
                  <div key={index}>
                    <div className={styles.tableContent}>
                      <div style={{ width: "100px" }}>
                        <img
                          src={data.images}
                          // {product.images || "/Images/placeholder.jpg"}
                          alt="Product"
                          className={styles.productImage}
                        />
                      </div>
                      <div
                        style={{ width: "180px" }}
                        className={styles.productName}
                      >
                        {data.name}
                      </div>
                      <div style={{ width: "100px" }}>
                        <div className={styles.productType}>
                          {data.category}
                        </div>
                      </div>
                      <div
                        style={{ width: "100px" }}
                        className={styles.productPrice}
                      >
                        Rs. {data.price}
                      </div>
                      <div
                        style={{
                          width: "100px",
                          display: "flex",
                          gap: "12px",
                        }}
                      >
                        <div
                          className={styles.action}
                          onClick={() => {
                            handleEdit(data);
                            console.log(data.stock, data.description);
                          }}
                        >
                          <Pen size={20} color="var(--color-blue)" />
                        </div>
                        <div
                          className={styles.action}
                          style={{ backgroundColor: "#f3bedaff" }}
                          onClick={() => handleDelete(data._id)}
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
              })
            ) : (
              <div
                style={{ padding: "20px", textAlign: "center" }}
                className="heading"
              >
                No products found
              </div>
            )}
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
