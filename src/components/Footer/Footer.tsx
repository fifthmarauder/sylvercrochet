import styles from "./footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img
            src={"/Images/LogoNoBackground.png"}
            alt="Logo"
            width={175}
            height={70}
          />
          <div className={styles.contact}>@sylvercrochet</div>
          <div
            className={styles.contact}
            style={{ display: "flex", gap: "8px" }}
          >
            <InstagramIcon sx={{ fontSize: "40px" }} />{" "}
            <PinterestIcon sx={{ fontSize: "40px" }} />
          </div>
          <div className={styles.copyright}>
            <div>©2024 SylverCrochet</div>
            <div>Mail us at sarah@gmail.com</div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.contactContainer}>
            <div className={styles.contact}>Contact Us</div>
            <div className={styles.contact}>About Us</div>
            <div className={styles.contact}>FAQ</div>
          </div>
          <div className={styles.contactContainer}>
            <div className={styles.contact}>Contact Us</div>
            <div className={styles.contact}>About Us</div>
            <div className={styles.contact}>FAQ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
