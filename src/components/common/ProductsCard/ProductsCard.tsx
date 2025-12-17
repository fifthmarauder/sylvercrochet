import { ShoppingCart } from "lucide-react";
import Button from "../Button/Button";
import styles from "./productscard.module.css";

const ProductsCard = () => {
  return (
    <div className={styles.productCard}>
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
        Adorable handmade crochet bear, perfect for cuddling! Made with soft,
        hypoallergic yarn.
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
};

export default ProductsCard;
