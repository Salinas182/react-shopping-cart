import { useEffect, useState } from "react";
import httpAdapter from "../../adapters/httpAdapter";
import useErrorHandling from "../../hooks/useErrorHandling";
import styles from "./Checkout.module.css";
import DealDetails from "./dealDetails";

export default function Checkout() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { error, handleError } = useErrorHandling();

  useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await httpAdapter.getLocalJson('/product.json');
        setProduct(data);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false)
      }
    }

    getProduct();
  }, [handleError]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>¡Comenzamos con tu pedido!</h2>
      <hr className={styles.divider} />
      
      <DealDetails product={product}/>
    </div>
  );
}
