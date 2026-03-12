"use client";
import { Box, House, Sparkle } from "lucide-react";
import styles from "./order.module.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/common/Button/Button";

const Ballpit = dynamic(() => import("@/components/Ballpit"), { ssr: false });

const OrderSuccess = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderNumber = searchParams.get("orderNumber");
  const rules = [
    {
      number: "1",
      rule: "You'll receive a confirmation email shortly with your order details",
      color: "var(--color-darkPink)",
      backgroundColor: "var(--color-lightPink)",
    },
    {
      number: "2",
      rule: "You'll be required to pay upfront upon receiving the confirmatory email",
      color: "var(--color-blue)",
      backgroundColor: "var(--color-secondary)",
    },
    {
      number: "3",
      rule: "Once the payment is confirmed we will start crafting your crochet item",
      color: "var(--color-violet)",
      backgroundColor: "var(--color-lilac)",
    },
    {
      number: "4",
      rule: "Your order will be delivered within 15 business days.",
      color: "orange",
      backgroundColor: "var(--color-bgLight)",
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.firstContainer}>
          <TaskAltIcon
            sx={{
              color: "#0cc30c",
              fontSize: "64px",
              animation:
                "bounce 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both",
              "@keyframes bounce": {
                "0%": { transform: "scale(0)", opacity: 0 },
                "50%": { transform: "scale(1.3)", opacity: 1 },
                "70%": { transform: "scale(0.9)" },
                "85%": { transform: "scale(1.1)" },
                "100%": { transform: "scale(1)" },
              },
            }}
          />
          <div className="heading" style={{ color: "var(--color-darkPink)" }}>
            ORD<span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>R
            PL
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>CED
            SUCCESSF
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>U</span>
            LLY
          </div>
          <div className={styles.para}>Thankyou for your purchase! 🎉</div>
          <div className={styles.para} style={{ fontSize: "18px" }}>
            Your order number is:{" "}
            <span style={{ color: "var(--color-darkPink)" }}>
              {orderNumber}
            </span>
          </div>
        </div>

        <div className={styles.infoContainer}>
          <div
            className="heading"
            style={{
              fontSize: "32px",
              color: "var(--color-darkPink)",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box size={32} />
            <div>WHAT'S NEXT?</div>
          </div>
          {rules.map((data) => {
            return (
              <div key={data.number} className={styles.rules}>
                <div
                  style={{
                    backgroundColor: data.backgroundColor,
                    color: data.color,
                  }}
                  className={styles.ruleNumber}
                >
                  {data.number}
                </div>
                <div className={styles.para} style={{ fontSize: "16px" }}>
                  {data.rule}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.ballPitContainer}>
          <div
            className="heading"
            style={{
              fontSize: "32px",
              color: "var(--color-darkPink)",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sparkle size={32} />
            <div>CELEBRATE WITH OUR BALL PIT</div>
          </div>

          <div
            style={{
              width: "700px",
              height: "400px",
              position: "relative",
              borderRadius: "99px",
            }}
          >
            <Ballpit
              count={150}
              gravity={0.2}
              friction={0.9975}
              wallBounce={0.95}
              followCursor={false}
              colors={["#e83c91", "#ffe9ed", "#6699cb"]}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            Icon={House}
            text="Back to Home"
            onClick={() => {
              router.push("/");
            }}
          />
          <Button
            Icon={Box}
            text="Continue Shopping"
            containerStyles={{ backgroundColor: "var(--color-blue)" }}
            onClick={() => {
              router.push("/shop");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
