import { ShoppingCart } from "lucide-react";
import Button from "../Button/Button";
import styles from "./productscard.module.css";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    images: string;
    category: string;
    price: number;
    stock: boolean;
    description: string;
  };
}
const ProductsCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <img
        src={product.images || "/Images/placeholder.jpg"}
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <div className={styles.productType}>{product.category}</div>
      </div>
      <div className={styles.productName}>{product.name}</div>
      <div className={styles.productDescription}>{product.description}</div>
      <div className={styles.priceContainer}>
        <div className={styles.productPrice}>Rs. {product.price}</div>
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
