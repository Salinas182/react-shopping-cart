import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  if (!product) {
    return <></>;
  }

  return (
    <div className={styles.card}>
      <h2>{product.name}</h2>
    </div>
  );
}
