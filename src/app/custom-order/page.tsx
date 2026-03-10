"use client";

import { useState } from "react";
import styles from "./custom.module.css";
import { PAKISTAN_CITIES } from "../../../constants/cities";
import Button from "@/components/common/Button/Button";
import { Box, Upload } from "lucide-react";
import { api } from "../api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CustomOrder = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (imageFiles.length + files.length > 5) {
      toast.error("Maximum 5 images allowed");
      return;
    }

    const validFiles: File[] = [];
    const newPreviews: string[] = [];

    files.forEach((file) => {
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error(`${file.name} is not a valid image format`);
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error(`${file.name} is too large. Max 5MB per image.`);
        return;
      }

      validFiles.push(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews.push(reader.result as string);
        if (newPreviews.length === validFiles.length) {
          setImagePreviews((prev) => [...prev, ...newPreviews]);
        }
      };
      reader.readAsDataURL(file);
    });

    setImageFiles((prev) => [...prev, ...validFiles]);
  };

  const removeImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImages = async (): Promise<string[]> => {
    const uploadedUrls: string[] = [];

    for (const file of imageFiles) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await api.post("/api/users/image", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.data.success) {
          uploadedUrls.push(response.data.url);
        }
      } catch (error) {
        throw new Error(`Failed to upload ${file.name}`);
      }
    }

    return uploadedUrls;
  };

  const handleSubmit = async () => {
    if (
      !fullName ||
      !email ||
      !contactNo ||
      !streetAddress ||
      !city ||
      !zipCode
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    if (imageFiles.length === 0) {
      toast.error("Please upload at least one reference image");
      return;
    }

    if (!description || description.length < 20) {
      toast.error(
        "Please provide a detailed description (at least 20 characters)",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      toast.info("Uploading images...");
      const imageUrls = await uploadImages();

      const orderData = {
        customerInfo: { fullName, email, contactNo },
        shippingAddress: { streetAddress, city, zipCode },
        description,
        referenceImages: imageUrls,
      };

      const response = await api.post("/api/users/create", orderData);

      if (response.data.success) {
        toast.success(
          "Custom order request submitted! We'll email you a quote soon.",
        );
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error: any) {
      console.error("Custom order error:", error);
      toast.error(
        error.response?.data?.message || "Failed to submit custom order",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className="heading" style={{ color: "var(--color-darkPink)" }}>
          CUST<span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>M
          ORD
          <span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>R
        </div>
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
                  <input
                    className={styles.inputField}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <div className={styles.inputTitle}>Contact No.</div>
                  <input
                    className={styles.inputField}
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                  />
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
                <div className={styles.inputTitle}>Email</div>
                <input
                  className={styles.inputField}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                <div className={styles.inputTitle}>Street Address</div>
                <input
                  className={styles.inputField}
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
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
                  <select
                    className={styles.inputField}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">Select city</option>
                    {PAKISTAN_CITIES.map((cityName) => (
                      <option key={cityName} value={cityName}>
                        {cityName}
                      </option>
                    ))}
                  </select>
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
                  <input
                    className={styles.inputField}
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.borderBox}>
            <div
              className="heading"
              style={{ color: "var(--color-darkPink)", fontSize: "32px" }}
            >
              ORDER DETAILS
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "100%",
              }}
            >
              <div className={styles.inputTitle}>Order Description</div>
              <textarea
                className={styles.inputField}
                style={{ height: "15vh" }}
                placeholder="Describe your order..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.borderBox}>
            <div
              className="heading"
              style={{ color: "var(--color-darkPink)", fontSize: "32px" }}
            >
              REFERENCE IMAGE
            </div>
            {imagePreviews.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginBottom: "20px",
                }}
              >
                {imagePreviews.map((preview, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <button
                      onClick={() => removeImage(index)}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        background: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "25px",
                        height: "25px",
                        cursor: "pointer",
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "100%",
              }}
            >
              {imageFiles.length < 5 && (
                <>
                  <div className={styles.inputTitle}>
                    Upload an image or something similar for reference
                  </div>
                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    id="image-upload"
                    onChange={handleImageChange}
                    multiple
                    style={{ display: "none" }}
                  />
                  <label htmlFor="image-upload" className={styles.imageUpload}>
                    <Upload size={20} />
                    Upload Images (Max 5)
                  </label>
                </>
              )}
            </div>
          </div>

          <Button
            text={
              isSubmitting
                ? "Placing Custom Order Request..."
                : "Place Custom Order Request"
            }
            Icon={Box}
            containerStyles={{ justifyContent: "center" }}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
