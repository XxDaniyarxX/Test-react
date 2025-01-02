// src/router.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProductDetail from './Details/ProductDetail.jsx';
import AboutDetail from './Details/AboutDetail.jsx'
import ContactDetail from './Details/ContactDetail.jsx'

export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/about/:uuid',
    element: <AboutDetail />,
  },
  {
    path: '/contact/:id',
    element: <ContactDetail />,
  },
]);
