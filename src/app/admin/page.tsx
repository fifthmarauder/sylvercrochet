"use client";
import Button from "@/components/common/Button/Button";
import styles from "./admin.module.css";
import {
  Box,
  BoxIcon,
  DollarSign,
  LogOut,
  Package,
  Pen,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";
import Wave from "@/components/common/Wave";
import { Close, Inventory } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api";
import { Categories } from "@/components/common/categories";
import { useRouter } from "next/navigation";

const Admin = () => {
  const EditProductRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
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
  const [isUploading, setIsUploading] = useState(false);

  const [imageFile, setImageFile] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (openDrawer && EditProductRef.current) {
      setTimeout(() => {
        EditProductRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [openDrawer]);

  useEffect(() => {
    fetchStats();
    fetchProducts();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin-login");
    }
  }, [router]);

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
    setIsEditMode(false);
    setEditingProductId(null);
    setImageFile([]);
    setImagePreview([]);
    setExistingImages([]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    const totalAfterAdd =
      imageFile.length + existingImages.length + files.length;
    for (const file of files) {
      if (!allowedTypes.includes(file.type)) {
        toast.error("Please upload only image files (JPEG, PNG, WEBP)");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB");
        return;
      }
    }

    if (totalAfterAdd > 3) {
      toast.error("Maximum 3 images per product");
      return;
    }

    setImageFile((prev) => [...prev, ...files]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () =>
        setImagePreview((prev) => [...prev, reader.result as string]);
      reader.readAsDataURL(file);
    });
  };

  const removeNewImage = (index: number) => {
    setImageFile((prev) => prev.filter((_, i) => i !== index));
    setImagePreview((prev) => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (index: number) => {
    setExistingImages((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImagesToServer = async (): Promise<string[]> => {
    if (!imageFile.length) return [];

    const formData = new FormData();
    imageFile.forEach((file) => formData.append("images", file));

    setIsUploading(true);
    try {
      const response = await api.post("/api/users/image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.data.success) return response.data.urls;
      throw new Error("Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

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

  const handleAddProduct = async () => {
    if (!name || !category || !description || !price) {
      toast.error("Please fill all required fields");
      return;
    }
    if (!isEditMode && !imageFile) {
      toast.error("Please upload a product image");
      return;
    }

    if (isEditMode && !imageFile && !images) {
      toast.error("Please upload a product image");
      return;
    }
    const totalImages = existingImages.length + imageFile.length;

    if (totalImages === 0) {
      toast.error("Please upload at least one product image");
      return;
    }

    try {
      const newUrls = imageFile.length ? await uploadImagesToServer() : [];
      const allImages = [...existingImages, ...newUrls];

      if (isEditMode && editingProductId) {
        await api.put(`/api/users/updateProduct/${editingProductId}`, {
          name,
          category,
          description,
          price: Number(price),
          isFeatured,
          stock,
          images: allImages,
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
          images: allImages,
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
    setExistingImages(
      Array.isArray(product.images) ? product.images : [product.images],
    );
    setImageFile([]);
    setImagePreview([]);
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
            <div
              className={`heading ${styles.heading}`}
              style={{ color: "var(--color-darkPink)" }}
            >
              AD<span style={{ fontFamily: "var(--font-knotnoodle)" }}>M</span>
              IN D
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>
              SHBO
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>RD
            </div>

            <div
              style={{ display: "flex", gap: "12px" }}
              className={styles.reverseButtons}
            >
              <Button
                text="Logout "
                Icon={LogOut}
                containerStyles={{ backgroundColor: "gray" }}
                onClick={() => {
                  localStorage.removeItem("adminToken");
                  toast.success("Logged out successfully");
                  router.push("/admin-login");
                }}
              />
              <Button
                text="Add New Product "
                Icon={Plus}
                onClick={() => {
                  clearForm();
                  setOpenDrawer(true);
                }}
              />
            </div>
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
            <div className={styles.addProductContainer} ref={EditProductRef}>
              <div
                className={`heading ${styles.heading}`}
                style={{
                  color: "var(--color-darkPink)",
                  fontSize: "32px",
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
                <div className={styles.oneRow}>
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
                    gap: "16px",
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
                <div className={styles.oneRow}>
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
                    <div className={styles.inputTitle}>
                      Image *(1 required, up to 3)
                    </div>

                    <div
                      style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                    >
                      {existingImages.map((url, i) => (
                        <div key={`ex-${i}`} style={{ position: "relative" }}>
                          <img
                            src={url}
                            style={{
                              width: 64,
                              height: 64,
                              objectFit: "cover",
                              borderRadius: 8,
                            }}
                          />
                          <button
                            onClick={() => removeExistingImage(i)}
                            style={{
                              position: "absolute",
                              top: -6,
                              right: -6,
                              background: "red",
                              border: "none",
                              borderRadius: "50%",
                              width: 20,
                              height: 20,
                              cursor: "pointer",
                              color: "white",
                              fontSize: 12,
                              lineHeight: "20px",
                              textAlign: "center",
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      {imagePreview.map((src, i) => (
                        <div key={`new-${i}`} style={{ position: "relative" }}>
                          <img
                            src={src}
                            style={{
                              width: 64,
                              height: 64,
                              objectFit: "cover",
                              borderRadius: 8,
                            }}
                          />
                          <button
                            onClick={() => removeNewImage(i)}
                            style={{
                              position: "absolute",
                              top: -6,
                              right: -6,
                              background: "red",
                              border: "none",
                              borderRadius: "50%",
                              width: 20,
                              height: 20,
                              cursor: "pointer",
                              color: "white",
                              fontSize: 12,
                              lineHeight: "20px",
                              textAlign: "center",
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Only show upload button if under 3 total */}
                    {existingImages.length + imageFile.length < 3 && (
                      <>
                        <input
                          type="file"
                          accept="image/jpeg,image/jpg,image/png,image/webp"
                          onChange={handleImageChange}
                          id="image-upload"
                          multiple
                          style={{ display: "none" }}
                        />
                        <label
                          htmlFor="image-upload"
                          className={styles.imageUploadLabel}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--color-darkPink)";
                            e.currentTarget.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--color-lightPink)";
                            e.currentTarget.style.color =
                              "var(--color-darkPink)";
                          }}
                        >
                          <Upload size={18} />
                          {`Add Image (${existingImages.length + imageFile.length}/3)`}
                        </label>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.oneRow}>
                <Button
                  text={isEditMode ? "Update Product" : "Add Product"}
                  Icon={Box}
                  containerStyles={{ width: "fit-content" }}
                  onClick={() => {
                    handleAddProduct();
                  }}
                  disabled={isUploading}
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
              className={`heading ${styles.heading}`}
              style={{
                color: "var(--color-darkPink)",
                fontSize: "32px",
              }}
            >
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>LL
              PR
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>
              DUCTS
            </div>

            <div className={styles.table}>
              <div>Image</div>
              <div>Name</div>
              <div>Category</div>
              <div>Price </div>
              <div>Action</div>
            </div>

            <div
              className={styles.table}
              style={{
                borderBottom: "3px solid var(--color-primary)",
                padding: "0 10px",
              }}
            ></div>
            {loading ? (
              <div className={styles.loaderContainer}>
                <div className={styles.loader} />
              </div>
            ) : products.length > 0 ? (
              products.map((data: any, index) => {
                return (
                  <div key={index} style={{ width: "100%" }}>
                    <div className={styles.tableContent}>
                      <div>
                        <img
                          src={
                            Array.isArray(data.images)
                              ? data.images[0]
                              : data.images
                          }
                          alt="Product"
                          className={styles.productImage}
                        />
                      </div>
                      <div className={styles.productName}>{data.name}</div>
                      <div>
                        <div
                          className={styles.productType}
                          style={{ minWidth: "80px", textAlign: "center" }}
                        >
                          {data.category}
                        </div>
                      </div>
                      <div className={styles.productPrice}>
                        Rs. {data.price}
                      </div>
                      <div
                        style={{
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
                      className={styles.table}
                      style={{
                        borderBottom: "1px solid rgba(240, 240, 240, 1)",
                        padding: "0 10px",
                      }}
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
