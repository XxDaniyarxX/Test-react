import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function AboutDetail() {
  const { uuid } = useParams();
  const api = `https://boykot.kg/api/v1/products/${uuid}`;
  const [baykot, setBaykot] = useState(null);

  async function getBaykot() {
    try {
      const res = await axios.get(api);
      setBaykot(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBaykot();
  }, [uuid]);

  if (!baykot) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{width: '300px', height: '420px', border: '1px solid black'}}>
        <img width={220} src={baykot.logo} alt={baykot.title}/>
        <h1>{baykot.title}</h1>
        <p>Rating: ${baykot.rating}</p>
        <p>Brand: {baykot.brand}</p>
        <h4>{baykot.description_ru}</h4>
      </div>
    </div>
  );
}
