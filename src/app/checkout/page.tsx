"use client";
import { useRouter } from "next/navigation";
import styles from "./checkout.module.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useState } from "react";
import { getShippingCost, PAKISTAN_CITIES } from "../../../constants/cities";
import { toast } from "react-toastify";
import { api } from "../api";
import { clearCart } from "../../../store/slices/cartSlice";
import Button from "@/components/common/Button/Button";
import { Box } from "lucide-react";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useAppSelector((state) => state.cart);

  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [modifications, setModifications] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shippingCost = city ? getShippingCost(city) : 0;
  const totalAmount = totalPrice + shippingCost;

  const handleSubmit = async () => {
    if (
      !fullName ||
      !contactNo ||
      !email ||
      !streetAddress ||
      !city ||
      !zipCode
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    const phoneRegex = /^(\+92|92|0)?3[0-9]{9}$/;
    if (!phoneRegex.test(contactNo.replace(/\s|-/g, ""))) {
      toast.error("Please enter a valid Pakistani phone number");
      return;
    }

    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    setIsSubmitting(true);

    try {
      const orderData = {
        customerInfo: {
          fullName,
          email,
          contactNo,
        },
        shippingAddress: {
          streetAddress,
          city,
          zipCode,
        },
        items: items.map((item) => ({
          productId: item._id,
          name: item.name,
          images: item.images,
          category: item.category,
          price: item.price,
          quantity: item.quantity,
        })),
        subtotal: totalPrice,
        modifications,
      };

      const response = await api.post("/api/users/create", orderData);

      if (response.data.success) {
        toast.success(
          "Order placed successfully! You will receive confirmation via phone.",
        );
        dispatch(clearCart());
        // setTimeout(() => {
        //   router.push(
        //     "/order-success?orderNumber=" + response.data.order.orderNumber,
        //   );
        // }, 2000);
      }
    } catch (error: any) {
      console.error("Order error:", error);
      toast.error(error.response?.data?.message || "Failed to place order");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className="heading" style={{ color: "var(--color-darkPink)" }}>
          CH<span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>CK
          <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>UT
        </div>

        <div className={styles.boxContainer}>
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
                <div className={styles.inputTitle}>Modification(Optional)</div>
                <textarea
                  className={styles.inputField}
                  style={{ height: "15vh" }}
                  placeholder="Special requests or instructions..."
                  value={modifications}
                  onChange={(e) => setModifications(e.target.value)}
                />
              </div>
            </div>

            <Button
              text={isSubmitting ? "Placing Order..." : "Place Order"}
              Icon={Box}
              containerStyles={{ justifyContent: "center" }}
              onClick={handleSubmit}
            />
          </div>

          {/* right container(order summary) */}
          <div className={styles.checkoutContainer}>
            <div
              className="heading"
              style={{ fontSize: "32px", color: "var(--color-darkPink)" }}
            >
              ORD<span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>
              R SUM
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>M</span>ARY
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {items.map((item) => {
                return (
                  <div style={{ display: "flex", gap: "12px" }} key={item._id}>
                    <img src={item.images} className={styles.productImage} />
                    <div
                      className={styles.productCategory}
                      style={{ flexDirection: "column" }}
                    >
                      <div>{item.name}</div>
                      <div>Qty: {item.quantity}</div>
                      <div style={{ color: "var(--color-darkPink)" }}>
                        Rs. {item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div style={{ border: "1px solid var(--color-darkPink)" }}></div>
              <div
                className={styles.productCategory}
                style={{ fontSize: "18px", justifyContent: "space-between" }}
              >
                <div>Sub Total({items.length} items)</div>
                <div>Rs.{totalPrice}</div>
              </div>
              <div
                className={styles.productCategory}
                style={{ fontSize: "18px", justifyContent: "space-between" }}
              >
                <div>Shipping {city && `(${city})`}</div>
                <div>{city ? `Rs. ${shippingCost}` : "Select city"}</div>
              </div>
            </div>
            <div style={{ border: "1px solid var(--color-darkPink)" }}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className={styles.productCategory}
                style={{ fontSize: "18px" }}
              >
                Total
              </div>
              <div
                style={{
                  color: "var(--color-darkPink)",
                  fontWeight: "800",
                  fontSize: "32px",
                  textAlign: "right",
                }}
              >
                Rs. {totalAmount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
