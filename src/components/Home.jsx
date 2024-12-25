import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header.jsx'

export default function Home() {
  const api = 'https://dummyjson.com/products';
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await axios.get(api);
    setProducts(response.data.products);
    console.log(response.data.products);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', width: '1700px', margin: '40px auto', flexWrap: 'wrap', gap: '40px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ width: '320px', height: '460px', borderRadius: '6px', border: '1px solid black' }}>
            <img width={320} height={350} src={product.thumbnail} alt={product.title} />
            <div style={{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
              <h3>{product.brand}</h3>
              <h3 style={{ color: 'red' }}>{product.price}</h3>
            </div>
            <button style={{ width: '313px', marginLeft: '3px', height: '40px', fontSize: '22px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', borderRadius: '8px', color: 'white' }}>Add To Card</button>
          </div>
        ))}
      </div>
    </div>
  );
}
