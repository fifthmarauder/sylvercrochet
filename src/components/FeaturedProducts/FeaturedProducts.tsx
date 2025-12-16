import { Heart, ShoppingCart, Sparkles } from "lucide-react";
import Button from "../common/Button/Button";
import styles from "./featuredproducts.module.css";
import Wave from "../common/Wave";

const FeaturedProducts = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className="heading" style={{ color: "var(--color-darkPink)" }}>
              FEAT
              <span style={{ fontFamily: "var(--font-knotnoodle" }}>U</span>RED
              PR<span style={{ fontFamily: "var(--font-knotnoodle" }}>O</span>
              DUCTS
            </div>
            <div className={styles.para}>
              Check out our most popular handmade items.
            </div>
          </div>
          <div className={styles.productContainer}>
            {[1, 2, 3].map((data, index) => {
              return (
                <div className={styles.productCard} key={index}>
                  <img
                    src={"/Images/Huntrix.jpg"}
                    alt="Product"
                    className={styles.productImage}
                  />
                  <div className={styles.productInfo}>
                    <div className={styles.productType}>Plushies</div>
                  </div>
                  <div className={styles.productName}>HUNTRIX FULL SET</div>
                  <div className={styles.productDescription}>
                    Adorable handmade crochet bear, perfect for cuddling! Made
                    with soft, hypoallergic yarn.
                  </div>
                  <div className={styles.priceContainer}>
                    <div className={styles.productPrice}>Rs. 4500</div>
                    <Button
                      text="Add to Cart"
                      Icon={ShoppingCart}
                      containerStyles={{ fontSize: "18px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <Button
            text="View All Products"
            Icon={Sparkles}
            containerStyles={{
              flexDirection: "row-reverse",
              marginBottom: "64px",
            }}
          />
          <div className={styles.exploreShopContainer}>
            <div className={styles.exploreHeading}>
              ST<span style={{ fontFamily: "var(--font-knotnoodle)" }}>A</span>
              RT YO
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>U</span>R
              CR<span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>
              CHET JOURN
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>E</span>Y T
              <span style={{ fontFamily: "var(--font-knotnoodle)" }}>O</span>DAY
            </div>
            <div className={styles.para}>
              Whether you're looking for a unique gift or treating yourself, our
              handmade crochet items bring warmth and joy to any space
            </div>
            <Button text="Explore Our Shop" Icon={Heart} />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "var(--color-surfaceBlack)" }}>
        {" "}
        <Wave color="var(--color-lightPink)" />
      </div>
    </>
  );
};

export default FeaturedProducts;
