import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./productscard.module.css";
import { useAppDispatch } from "../../../../store/hooks";
import { toast } from "react-toastify";
import { addToCart } from "../../../../store/slices/cartSlice";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    images: string | string[];
    category: string;
    price: number;
    stock: boolean;
    description: string;
  };
}

const ProductsCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState(0);

  if (!product) return null;

  const imageList: string[] = Array.isArray(product.images)
    ? product.images
    : product.images
      ? [product.images]
      : ["/Images/placeholder.jpg"];

  const hasManyImages = imageList.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + imageList.length) % imageList.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % imageList.length);
  };

  const handleAddToCart = () => {
    if (!product.stock) {
      toast.error("Product is out of stock");
      return;
    }
    dispatch(
      addToCart({
        _id: product._id,
        name: product.name,
        images: imageList[0],
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
      {/* Image carousel */}
      <div className={styles.imageWrapper}>
        <img
          src={imageList[current] || "/Images/placeholder.jpg"}
          alt={product.name}
          className={styles.productImage}
        />
        {hasManyImages && (
          <>
            <button
              className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`}
              onClick={prev}
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className={`${styles.carouselBtn} ${styles.carouselBtnRight}`}
              onClick={next}
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
            <div className={styles.dots}>
              {imageList.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrent(i);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.productInfo}>
        <div className={styles.productType}>{product.category}</div>
      </div>
      <div className={styles.productName}>{product.name}</div>
      <div className={styles.productDescription}>
        <span className={styles.descriptionText}>{product.description}</span>
        <span className={styles.tooltip}>{product.description}</span>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.productPrice}>Rs. {product.price}</div>
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
