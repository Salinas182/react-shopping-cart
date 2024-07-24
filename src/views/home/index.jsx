import { useEffect, useState } from "react";
import ProductsList from "../../components/productsList";
import httpAdapter from "../../adapters/httpAdapter";
import useErrorHandling from "../../hooks/useErrorHandling";
import styles from './Home.module.css';
import backgroundImage from '../../assets/images/featured.jpg';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { error, handleError } = useErrorHandling();

  useEffect(() => {
    async function getProducts() {
      try {
        const { data } = await httpAdapter.get('/product/offering/products?page=1&size=20');
        setProducts(data?._embedded?.products);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, [handleError]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
      className={styles.homeContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <ProductsList products={products}/>
    </div>
  );
}
