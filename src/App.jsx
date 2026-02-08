import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import PageLoader from './components/layout/PageLoader';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Cart = lazy(() => import('./pages/Cart'));
const Profile = lazy(() => import('./pages/Profile'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Services = lazy(() => import('./pages/Services'));
const Construction = lazy(() => import('./pages/services/Construction'));
const Maintenance = lazy(() => import('./pages/services/Maintenance'));
const Mosaic = lazy(() => import('./pages/services/Mosaic'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Showroom = lazy(() => import('./pages/Showroom'));
const Gallery = lazy(() => import('./pages/Gallery'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="services">
              <Route index element={<Services />} />
              <Route path="construction" element={<Construction />} />
              <Route path="maintenance" element={<Maintenance />} />
              <Route path="mosaic" element={<Mosaic />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="showroom" element={<Showroom />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
