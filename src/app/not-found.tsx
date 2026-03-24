"use client";
import Button from "@/components/common/Button/Button";
import styles from "./notFound.module.css";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { House } from "lucide-react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <SentimentDissatisfiedIcon
          sx={{
            color: "white",
            backgroundColor: "var(--color-darkPink)",
            padding: "24px",
            borderRadius: "99px",
            fontSize: "64px",
            animation: "bounce 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both",
            "@keyframes bounce": {
              "0%": { transform: "scale(0)", opacity: 0 },
              "50%": { transform: "scale(1.3)", opacity: 1 },
              "70%": { transform: "scale(0.9)" },
              "85%": { transform: "scale(1.1)" },
              "100%": { transform: "scale(1)" },
            },
          }}
        />
        <div
          className={`${styles.heading} heading`}
          style={{ color: "var(--color-darkPink)" }}
        >
          404 :\
        </div>
        <div
          className={`${styles.heading} heading`}
          style={{ color: "var(--color-darkPink)" }}
        >
          OOPS! PAGE NOT FOUND
        </div>
        <div className={styles.para}>
          Your page lowk got tangled up in yarn💔🧶
        </div>
        <Button
          text="Back to Home"
          Icon={House}
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
    </div>
  );
};

export default NotFound;
