import { ShoppingCart } from "lucide-react";
import Button from "../Button/Button";
import styles from "./productscard.module.css";
import { useAppDispatch } from "../../../../store/hooks";
import { toast } from "react-toastify";
import { addToCart } from "../../../../store/slices/cartSlice";

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
  const dispatch = useAppDispatch();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!product.stock) {
      toast.error("Product is out of stock");
      return;
    }

    dispatch(
      addToCart({
        _id: product._id,
        name: product.name,
        images: product.images,
        category: product.category,
        price: product.price,
      }),
    );

    toast.success(
      `${product.name} added to cart! Keep shopping or visit cart for checkout`,
    );
  };
  return (
    <div className={styles.productCard}>
      <img
        src={product?.images || "/Images/placeholder.jpg"}
        alt={product?.name}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <div className={styles.productType}>{product?.category}</div>
      </div>
      <div className={styles.productName}>{product?.name}</div>
      <div className={styles.productDescription}>{product?.description}</div>
      <div className={styles.priceContainer}>
        <div className={styles.productPrice}>Rs. {product?.price}</div>
        <Button
          onClick={handleAddToCart}
          text="Add to Cart"
          Icon={ShoppingCart}
          containerStyles={{ fontSize: "18px" }}
        />
      </div>
    </div>
  );
};

export default ProductsCard;
