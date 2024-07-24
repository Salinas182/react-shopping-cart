import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import fiberIcon from '../../assets/icons/fibra.svg';
import phoneIcon from '../../assets/icons/smartphone.svg';
import { PRODUCT_TYPES } from '../../utils/constants';

export default function ProductCard({ product }) {
  if (!product || !product?.prices?.length) {
    return <></>;
  }

  const productIcons = {
    [PRODUCT_TYPES.FIBER]: fiberIcon,
    [PRODUCT_TYPES.PHONE]: phoneIcon,
  };

  const iconSource = productIcons[product.type] || null;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {iconSource && (
          <img src={iconSource}
            alt="Product Icon"
            className={styles.icon}
          />
        )}
        <h4 className={styles.productName}>{product.displayName}</h4>
      </div>
      <p className={styles.price}>
        {product.prices[0]?.price?.toFixed(2)} €/mes
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
