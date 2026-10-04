import React from 'react';
import ProductCard from './ProductCard';

import avtomatikaData from '../data/avtomatika.json';
import radioupravlenieData from '../data/radioupravlenie.json';
import svobodnyyVyezdData from '../data/svobodnyy-vyezd.json';

const allProducts = [...avtomatikaData, ...radioupravlenieData, ...svobodnyyVyezdData];

function FavoritesPage({ favoriteIds, onToggleFavorite }) {
  const favoriteProducts = allProducts.filter((p) => favoriteIds.includes(p.id));

  return (
    <section className="favorites-section">
      <div className="container-2">
        <h2 className="title-main" style={{ marginTop: '40px', marginBottom: '10px' }}>
          <span className="ru">Избранное</span>
          <span className="en">Favorites</span>
        </h2>
        <p className="favorites-subtitle">
          <span className="ru">Товары, которые вы добавили в список желаемого</span>
          <span className="en">Items you've added to your wishlist</span>
        </p>

        <div className="favorites-grid">
          {favoriteProducts.length === 0 ? (
            <p>
              <span className="ru">Вы пока ничего не добавили в избранное.</span>
              <span className="en">You haven't added anything to favorites yet.</span>
            </p>
          ) : (
            favoriteProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
                onShowDetails={() => {}}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default FavoritesPage;