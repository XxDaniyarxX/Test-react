// src/App.js
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './routes.jsx';

export default function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}
