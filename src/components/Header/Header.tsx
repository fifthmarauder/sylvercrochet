"use client";
import { usePathname, useRouter } from "next/navigation";
import ShoppingBag from "../Icons/ShoppingBag";
import styles from "./header.module.css";
import { House, LineSquiggle, Store } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    pathName.startsWith("/shop") || pathName.startsWith("/admin")
      ? setBackgroundColor("var(--color-lightPink)")
      : setBackgroundColor("#f6edda");
  }, [pathName]);

  const [backgroundColor, setBackgroundColor] = useState("#f6edda");

  return (
    <div style={{ backgroundColor: backgroundColor }}>
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
          <div
            className={styles.navbarButtons}
            onClick={() => {
              router.push("/");
            }}
          >
            <House /> HOME
          </div>
          <div
            className={styles.navbarButtons}
            onClick={() => {
              router.push("/shop");
            }}
          >
            <Store /> SHOP
          </div>
          <div className={styles.navbarButtons}>
            <LineSquiggle /> ABOUT US
          </div>
        </div>
        <div style={{ width: "175px", justifyContent: "end", display: "flex" }}>
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Header;
