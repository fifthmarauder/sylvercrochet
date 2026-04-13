"use client";
import styles from "./footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img
            src={"/Images/LogoNoBackground.png"}
            alt="Logo"
            width={175}
            height={70}
            className={styles.image}
          />
          <div className={styles.contact}>@sylvercrochet</div>
          <div
            className={styles.contact}
            style={{ display: "flex", gap: "8px" }}
          >
            <InstagramIcon
              sx={{ fontSize: "40px", cursor: "pointer" }}
              onClick={() => {
                window.open("https://www.instagram.com/sylvercrochet/");
              }}
            />
            <PinterestIcon
              sx={{ fontSize: "40px", cursor: "pointer" }}
              onClick={() => {
                window.open("https://www.pinterest.com/silvermystx/_created/");
              }}
            />
            <MailIcon
              sx={{ fontSize: "40px", cursor: "pointer" }}
              onClick={() => {
                window.location.href =
                  "mailto:sylvercrochet@gmail.com?subject=Hello&body=Hi there";
              }}
            />
          </div>
          <div className={styles.copyright}>
            <div>©2024 SylverCrochet</div>
            <div>Mail us at sylvercrochet@gmail.com </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.contactContainer}>
            <div
              className={styles.contact}
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              Contact Us
            </div>
            <div
              className={styles.contact}
              onClick={() => {
                router.push("/about-me");
              }}
            >
              About Me
            </div>
            <div
              className={styles.contact}
              onClick={() => {
                router.push("/faqs");
              }}
            >
              FAQs
            </div>
          </div>
          <div className={styles.contactContainer}>
            <div
              className={styles.contact}
              onClick={() => {
                router.push("/career");
              }}
            >
              Careers
            </div>

            <div
              className={styles.contact}
              onClick={() => {
                router.push("/custom-order");
              }}
            >
              Custom Order
            </div>
            <div
              className={styles.contact}
              onClick={() => {
                router.push("/faqs");
              }}
            >
              Delivery & Returns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
