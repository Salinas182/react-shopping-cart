import { useState } from "react";
import ProductCard from "../productCard";
import styles from './ProductsList.module.css';
import { PRODUCT_FILTERS, PRODUCT_TYPES } from "../../utils/constants";
import ProductsFilters from "../productsFilters";

export default function ProductsList({ products }) {
  const [filter, setFilter] = useState('ALL');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filters = {
    ALL: () => products,
    [PRODUCT_FILTERS.FIBER]: () => products.filter(product => product.type === PRODUCT_TYPES.FIBER),
    [PRODUCT_FILTERS.PHONE]: () => products.filter(product => product.type === PRODUCT_TYPES.PHONE),
  };

  const filteredProducts = filters[filter]();

  if (!products?.length) {
    return <p className = {styles.noProducts}>No hay productos disponibles</p>
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Conoce nuestras tarifas destacadas
      </h2>
      <p className={styles.subtitle}>
        Finetwork, tu operador de telefonía móvil y fibra
      </p>

      <ProductsFilters currentFilter={filter} onFilterChange={handleFilterChange} />

      <div className={styles.grid}>
        {
          filteredProducts?.map((product, idx) =>
            <ProductCard product={product} key={`${product?.id}-${idx}`} />
          )
        }
      </div>
    </div>
  );
}
