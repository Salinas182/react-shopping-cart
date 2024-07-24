import ProductCard from "../productCard";
import styles from './ProductsList.module.css';

export default function ProductsList({ products }) {
  if (!products?.length) {
    return <p className = {styles.noProducts}>No hay productos disponibles</p>
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Conoce nuestras tarifas destacadas
      </h2>

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
