import React from 'react';

function EquipmentCatalog({ items }) {
  return (
    <section className="equipment-catalog">
      <div className="container">
        <h2 className="title-main">
          <span className="ru">Каталог оборудования</span>
          <span className="en">Equipment Catalog</span>
        </h2>
        <div className="equipment-grid">
          {items.map((item) => (
            <a href={item.link} className="equipment-card" key={item.id}>
              <div className="equipment-card__icon">
                <img src={item.icon} alt={item.title.ru} />
              </div>
              <div className="equipment-card__title">
                <span className="ru">{item.title.ru}</span>
                <span className="en">{item.title.en}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EquipmentCatalog;