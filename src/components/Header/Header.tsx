"use client";
import { usePathname, useRouter } from "next/navigation";
import ShoppingBag from "../Icons/ShoppingBag";
import styles from "./header.module.css";
import { House, LineSquiggle, Store } from "lucide-react";
import { useAppSelector } from "../../../store/hooks";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  const totalItems = useAppSelector((state) => state.cart.totalItems);

  const backgroundColor = ["/shop", "/admin", "/cart", "/checkout"].some(
    (path) => pathName.startsWith(path),
  )
    ? "var(--color-lightPink)"
    : "#f6edda";

  const header = [
    { name: "Home", icon: House, path: "/" },
    { name: "Shop", icon: Store, path: "/shop" },
    { name: "About Us", icon: LineSquiggle, path: "/about-us" },
  ];

  const getActiveName = () => {
    if (pathName == "/") return "Home";
    if (pathName == "/shop") return "Shop";
    if (pathName == "/about-us") return "About Us";
    if (pathName == "/admin") return "Admin";
    return "";
  };

  const activeName = getActiveName();
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <div className={`${styles.main} ${menuOpen ? styles.open : ""}`}>
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
          {header.map((data, index) => {
            const isActive = activeName === data.name;
            return (
              <div
                key={index}
                className={styles.navbarButtons}
                style={isActive ? { color: "var(--color-darkPink)" } : {}}
                onClick={() => {
                  router.push(data.path);
                }}
              >
                <data.icon /> {data.name.toUpperCase()}
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", alignItems: "end", gap: "16px" }}>
          <div
            className={styles.cart}
            onClick={() => {
              router.push("/cart");
            }}
          >
            <ShoppingBag />
            {totalItems > 0 && (
              <div className={styles.cartPosition}>{totalItems}</div>
            )}
          </div>
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        {header.map((data, index) => {
          const isActive = activeName === data.name;
          return (
            <div
              key={index}
              className={styles.mobileNavButton}
              style={isActive ? { color: "var(--color-darkPink)" } : {}}
              onClick={() => {
                router.push(data.path);
                setMenuOpen(false);
              }}
            >
              <data.icon /> {data.name.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
