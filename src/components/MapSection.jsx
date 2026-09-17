import React from 'react';

function MapSection() {
  return (
    <section className="map-section">
      <div className="container">
        <h2 className="map-title">
          <span className="ru">Карта барьеров</span>
          <span className="en">Barrier Map</span>
        </h2>
        <div className="map-wrapper">
          <div id="yandex-map"></div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;