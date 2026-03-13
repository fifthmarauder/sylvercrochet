"use client";
import { DoorOpen, Lock } from "lucide-react";
import styles from "./admin.module.css";
import Button from "@/components/common/Button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.main}>
      <div className={styles.emptyContainer}>
        <Lock className={styles.emptyIcon} size={48} />
        <div
          className="heading"
          style={{ color: "var(--color-darkPink)", fontSize: "36px" }}
        >
          <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>DMIN L
          <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>GIN
        </div>
        <div className={styles.productCategory} style={{ marginTop: "-18px" }}>
          Sign in to manage your crochet shop
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              width: "100%",
            }}
          >
            <div className={styles.inputTitle}>Password</div>
            <input
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <Button
          text="Sign In"
          Icon={DoorOpen}
          containerStyles={{ width: "20vw", justifyContent: "center" }}
          onClick={() => {
            router.push("/admin");
          }}
        />
      </div>
    </div>
  );
};

export default page;
