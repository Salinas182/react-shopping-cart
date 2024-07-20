import ProductCard from "../productCard";
import styles from './ProductsList.module.css';

export default function ProductsList({ products }) {
  if (!products?.length) {
    return <p className = {styles.noProducts}>No available products</p>
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Products</h2>

      <div className={styles.grid}>
        {
          products.map((product, idx) =>
            <ProductCard product={product} key={`${product?.id}-${idx}`} />
          )
        }
      </div>
    </div>
  );
}
