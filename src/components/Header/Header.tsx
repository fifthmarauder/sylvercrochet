"use client";
import { usePathname, useRouter } from "next/navigation";
import ShoppingBag from "../Icons/ShoppingBag";
import styles from "./header.module.css";
import { House, LineSquiggle, Store } from "lucide-react";
import { useAppSelector } from "../../../store/hooks";

const Header = () => {
  const router = useRouter();
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
    { name: "About Us", icon: LineSquiggle, path: "/aboutus" },
  ];

  const getActiveName = () => {
    if (pathName == "/") return "Home";
    if (pathName == "/shop") return "Shop";
    if (pathName == "/admin") return "Admin";
    return "";
  };

  const activeName = getActiveName();
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
          {header.map((data) => {
            const isActive = activeName === data.name;
            return (
              <div
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
        <div
          style={{
            width: "175px",
            justifyContent: "end",
            display: "flex",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => {
            router.push("/cart");
          }}
        >
          <ShoppingBag />
          {totalItems > 0 && (
            <div className={styles.cartPosition}>{totalItems}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
