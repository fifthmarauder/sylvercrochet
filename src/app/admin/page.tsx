import Button from "@/components/common/Button/Button";
import styles from "./admin.module.css";
import { Plus } from "lucide-react";

const Admin = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <div className="heading" style={{ color: "var(--color-darkPink)" }}>
            AD<span style={{ fontFamily: "var(--font-knotnoodle)" }}>M</span>IN
            D<span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>SHBO
            <span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>RD
          </div>
          <Button text="Add New Product " Icon={Plus} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
