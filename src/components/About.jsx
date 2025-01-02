import Header from './Header.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function About() {
  const api = 'https://boykot.kg/api/v1/products/';
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await axios.get(api);
    setProducts(response.data.results);
    console.log(response.data.results);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', width: '1700px', margin: '40px auto', flexWrap: 'wrap', gap: '40px' }}>
        {products.map((product, index) => (
          <div key={index} style={{ width: '320px', height: '460px', borderRadius: '6px', border: '1px solid black' }}>
            <img width={320} height={350} src={product.logo} alt={product.title} />
            <div style={{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
              <h3>{product.brand}</h3>
              <h3 style={{ color: 'red' }}>{product.rating}</h3>
            </div>
            <Link to={`/about/${product.uuid}`} style={{ textDecoration: 'none', color: 'white' }}>
              <button style={{ width: '313px', marginLeft: '3px', height: '40px', fontSize: '22px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', borderRadius: '8px', color: 'white' }}>
                Смотреть детали
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
