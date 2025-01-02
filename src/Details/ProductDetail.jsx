// src/components/ProductDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '300px', height: '420px', border: '1px solid black', margin: '0 auto' }}>
      <img width={220} src={product.thumbnail} alt={product.title} />
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Brand: {product.brand}</p>
    </div>
  );
}
