import { useEffect, useState } from "react";
import httpAdapter from "../../adapters/httpAdapter";
import useErrorHandling from "../../hooks/useErrorHandling";
import styles from "./Checkout.module.css";
import DealDetails from "./dealDetails";
import CustomerDetails from "./customerDetails";
import OrderSummary from "./orderSummary";

export default function Checkout() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [currentStage, setCurrentStage] = useState(1);
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
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const nextStage = () => {
    setCurrentStage(prevStage => prevStage + 1);
  };

  const stages = {
    1: <DealDetails
      product={product}
      setDiscount={setDiscount}
      nextStage={nextStage}/>,
    2: <CustomerDetails nextStage={nextStage} />,
    3: <OrderSummary product={product} discount={discount} />
  }

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>¡Comenzamos con tu pedido!</h2>
      <hr className={styles.divider} />

      {stages[currentStage]}
    </div>
  );
}
