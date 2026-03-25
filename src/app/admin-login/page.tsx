"use client";
import { DoorOpen, Lock } from "lucide-react";
import styles from "./admin.module.css";
import Button from "@/components/common/Button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.post("/api/users/login", { email, password });
      if (response.data.token) {
        localStorage.setItem("adminToken", response.data.token);
        toast.success("Login successful!");
        router.push("/admin");
      }
      router.push("/admin");
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

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
        <div className={styles.productCategory}>
          Sign in to manage your crochet shop
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            justifyContent: "center",
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
            <div className={styles.inputTitle}>Email</div>
            <input
              className={styles.inputField}
              value={email}
              onKeyPress={handleKeyPress}
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
              type="password"
              className={styles.inputField}
              value={password}
              onKeyPress={handleKeyPress}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <Button
          text={isLoading ? "Signing In..." : "Sign In"}
          Icon={DoorOpen}
          containerStyles={{ justifyContent: "center" }}
          onClick={() => {
            handleClick();
          }}
        />
      </div>
    </div>
  );
};

export default page;
