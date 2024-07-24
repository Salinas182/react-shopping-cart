import React from 'react';
import styles from './ProductsFilters.module.css';
import { PRODUCT_FILTERS } from '../../utils/constants';

export default function ProductsFilters({ currentFilter, onFilterChange }) {
  return (
    <div className={styles.filterButtons}>
      <button
        onClick={() => onFilterChange(PRODUCT_FILTERS.ALL)}
        className={currentFilter === PRODUCT_FILTERS.ALL ? styles.activeFilter : ''}
      >
        Todos
      </button>

      <button
        onClick={() => onFilterChange(PRODUCT_FILTERS.FIBER)}
        className={currentFilter === PRODUCT_FILTERS.FIBER ? styles.activeFilter : ''}
      >
        Fibra
      </button>

      <button
        onClick={() => onFilterChange(PRODUCT_FILTERS.PHONE)}
        className={currentFilter === PRODUCT_FILTERS.PHONE ? styles.activeFilter : ''}
      >
        Móvil
      </button>
    </div>
  );
}
