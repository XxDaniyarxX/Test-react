import {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function ContactDetail() {
  const {id} = useParams()
  const api = `https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement/${id}`;
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await axios.get(api);
    setProducts(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div>
      <div style={{width: '300px', height: '500px',border: '1px solid black', margin: '0 auto'}}>
        <img width={220} src={products.imageUrl} alt={products.title}/>
        <h1>{products.category}</h1>
        <p>Price: ${products.price}</p>
        <p>Description: {products.description}</p>
        <h4>{products.size}</h4>
      </div>
    </div>
  )
}

