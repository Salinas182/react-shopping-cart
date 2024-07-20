import { useEffect, useState } from "react";
import ProductsList from "../components/productsList";
import httpAdapter from "../adapters/httpAdapter";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const { data } = await httpAdapter.get('/product/offering/products?page=1&size=20');
      setProducts(data?._embedded?.products);
    }

    getProducts();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <ProductsList products={products}/>
    </>
  );
}
