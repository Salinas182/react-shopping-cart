import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  if (!product || !product?.prices?.length) {
    return <></>;
  }

  return (
    <div className={styles.card}>
      <h4>{product.displayName}</h4>
      <p className={styles.price}>
        {product.prices[0]?.price?.toFixed(2)} €
      </p>

      <Link
        to={`/checkout/${product.id}`}
        className={styles.link}
      >
        Saber más
      </Link>
    </div>
  );
}
