import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import EquipmentCatalog from './components/EquipmentCatalog';
import PartnersSection, { partnersData } from './components/PartnersSection';
import CallbackSection from './components/CallbackSection';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import CatalogPage from './components/CatalogPage';
import FavoritesPage from './components/FavoritesPage';
import CartPage from './components/CartPage';
import AboutPage from './components/AboutPage';
import AddProductPage from './components/AddProductPage';

const ORG_NAME = 'ЕГДС';
const aboutTitle = { ru: 'Установка умной системы диспетчеризации', en: 'Smart Dispatching System Installation' };
const equipmentItems = [
  { id: 1, title: { ru: 'Автоматика проезда', en: 'Access Automation' }, icon: '/assets/barriers_7z3uzito3vkb 1.svg', link: '/catalog/avtomatika' },
  { id: 2, title: { ru: 'Свободный выезд', en: 'Free Exit' }, icon: '/assets/exit_8xem5xs575cf 1.svg', link: '/catalog/svobodnyy-vyezd' },
  { id: 3, title: { ru: 'Радиоуправление', en: 'Radio Control' }, icon: '/assets/remote_control_nw2uc52wjfq4 1.svg', link: '/catalog/radioupravlenie' },
];

function HomePage() {
  return (
    <>
      <HeroSlider />
      <About title={aboutTitle} />
      <EquipmentCatalog items={equipmentItems} />
      <PartnersSection partners={partnersData} />
      <CallbackSection />
    </>
  );
}

function App() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [cart, setCart] = useState([]);
  const [extraProducts, setExtraProducts] = useState([]);

  function handleToggleFavorite(productId) {
    setFavoriteIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  }

  function handleAddToCart(product) {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function handleRemoveFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function handleAddProduct(product) {
    setExtraProducts((prev) => [...prev, product]);
  }

  return (
    <div className="App">
      <Header orgName={ORG_NAME} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/catalog/:category"
            element={
              <CatalogPage
                favoriteIds={favoriteIds}
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
                extraProducts={extraProducts}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favoriteIds={favoriteIds}
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route path="/cart" element={<CartPage cart={cart} onRemove={handleRemoveFromCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add" element={<AddProductPage onAddProduct={handleAddProduct} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer orgName={ORG_NAME} />
    </div>
  );
}

export default App;