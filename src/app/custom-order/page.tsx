"use client";

import { useState } from "react";
import styles from "./custom.module.css";
import { PAKISTAN_CITIES } from "../../../constants/cities";
import Button from "@/components/common/Button/Button";
import { Box, Upload } from "lucide-react";

const CustomOrder = () => {
  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className="heading" style={{ color: "var(--color-darkPink)" }}>
          CUST<span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>M
          ORD
          <span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>R
        </div>

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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "100%",
              }}
            >
              <div className={styles.inputTitle}>
                Upload an image or something similar for reference
              </div>
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                id="image-upload"
                style={{ display: "none" }}
              />
              <label id="image-upload" className={styles.imageUpload}>
                <Upload size={20} />
                Upload Image
              </label>
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
            //   onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
