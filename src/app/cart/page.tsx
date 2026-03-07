"use client";

import { ArrowLeft, ShoppingBag } from "lucide-react";
import styles from "./cart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Button from "@/components/common/Button/Button";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../store/slices/cartSlice";

const Cart = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items, totalItems, totalPrice } = useAppSelector(
    (state) => state.cart,
  );

  if (items.length == 0) {
    return (
      <div className={styles.main}>
        <div className={styles.emptyContainer}>
          <ShoppingBag className={styles.emptyIcon} size={48} />
          <div
            className="heading"
            style={{ color: "var(--color-darkPink)", fontSize: "36px" }}
          >
            Y<span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>UR C
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>RT{" "}
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>I</span>S E
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>M</span>PTY
            ;-;
          </div>
          <div className={styles.productCategory}>
            Start by adding some products in your cart
          </div>
          <Button
            text="Start Shopping"
            Icon={ShoppingBag}
            onClick={() => {
              router.push("/shop");
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.backButton}>
          <ArrowLeft />
          Continue Shopping
        </div>
        <div
          className="heading"
          style={{ color: "var(--color-darkPink)", alignSelf: "self-start " }}
        >
          SH<span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>PPING
          C<span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>RT
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.products}>
            {items.map((item, index) => {
              return (
                <>
                  <div className={styles.product} key={item._id}>
                    <div className={styles.productLeft}>
                      <img src={item.images} className={styles.productImage} />
                      <div className={styles.productDetails}>
                        <div className={styles.productName}>{item.name}</div>
                        <div className={styles.productCategory}>
                          {item.category}
                        </div>
                        <div className={styles.actionButtons}>
                          <AddIcon
                            sx={{
                              color: "var(--color-darkPink)",
                              backgroundColor: "var(--color-lightPink)",
                              borderRadius: "999px",
                              padding: "6px",
                            }}
                            onClick={() => {
                              dispatch(incrementQuantity(item._id));
                            }}
                          />
                          <span>{item.quantity}</span>
                          <RemoveIcon
                            sx={{
                              color: "var(--color-darkPink)",
                              backgroundColor: "var(--color-lightPink)",
                              borderRadius: "999px",
                              padding: "6px",
                            }}
                            onClick={() => {
                              dispatch(decrementQuantity(item._id));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.productRight}>
                      <DeleteOutlineOutlinedIcon
                        sx={{
                          color: "var(--color-darkPink)",
                          fontSize: "28px",
                        }}
                        style={{ display: "flex", alignSelf: "end" }}
                        onClick={() => {
                          dispatch(removeFromCart(item._id));
                        }}
                      />
                      <div>
                        <div className={styles.productCategory}>
                          Rs. {item.price} each
                        </div>
                        <div
                          style={{
                            color: "var(--color-darkPink)",
                            fontWeight: "800",
                            fontSize: "24px",
                            textAlign: "right",
                          }}
                        >
                          {item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < items.length - 1 && (
                    <div
                      style={{ border: "1px solid rgba(240, 240, 240, 1)" }}
                    ></div>
                  )}
                </>
              );
            })}
          </div>
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
              <div
                className={styles.productCategory}
                style={{ fontSize: "18px", justifyContent: "space-between" }}
              >
                <div>Sub Total({totalItems} items)</div>
                <div>Rs. {totalPrice}</div>
              </div>
              <div
                className={styles.productCategory}
                style={{ fontSize: "18px", justifyContent: "space-between" }}
              >
                <div>Shipping</div>
                <div>-</div>
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
                {totalPrice}
              </div>
            </div>
            <Button
              text="Proceed to checkout"
              Icon={CreditCardIcon}
              containerStyles={{ display: "flex", justifyContent: "center" }}
              onClick={() => {
                router.push("/checkout");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
