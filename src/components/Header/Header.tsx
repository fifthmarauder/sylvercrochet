"use client";
import { useRouter } from "next/navigation";
import ShoppingBag from "../Icons/ShoppingBag";
import styles from "./header.module.css";
import { Book, House, LineSquiggle, Store } from "lucide-react";

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <img
        src={"/Images/LogoNoBackground.png"}
        alt="Logo"
        width={175}
        height={60}
        className={styles.Logo}
        onClick={() => {
          router.push("/");
        }}
      />

      <div className={styles.navbarButtonsContainer}>
        <div className={styles.navbarButtons}>
          <House /> HOME
        </div>
        <div className={styles.navbarButtons}>
          <Store /> SHOP
        </div>
        <div className={styles.navbarButtons}>
          <LineSquiggle /> ABOUT US
        </div>
      </div>
      <ShoppingBag />
    </div>
  );
};

export default Header;
