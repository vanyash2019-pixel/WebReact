import React from 'react';

function Header({ orgName }) {
  return (
    <header className="header" id="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top__wrapper">
            <nav className="header-top__nav">
              <ul>
                <li>
                  <a href="#">
                    <span className="ru">Темная тема</span>
                    <span className="en">Dark theme</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="ru">Светлая тема</span>
                    <span className="en">Light theme</span>
                  </a>
                </li>
                <li className="lang-switcher">
                  <button type="button" className="lang-btn active">RUS</button>
                  <button type="button" className="lang-btn">ENG</button>
                </li>
              </ul>
            </nav>
            <div className="header-top__address">
              <a className="header-location" href="#">
                <span className="ru">г. СПБ, наб. р. Карповки, 5И</span>
                <span className="en">St. Petersburg, Karpovka Embankment, 5I</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-center">
        <div className="container-2">
          <div className="header-center__wrapper">
            <div className="header-center__logo-block">
              <a className="header-logo" href="/">
                <img src="/assets/logo.png" alt="logo" className="logo-img" />
                <div className="logo-text-group">
                  <span className="logo-name">{orgName}</span>
                  <span className="logo-desc">
                    <span className="ru">Единая Городская Диспетчерская Служба Санкт-Петербурга</span>
                    <span className="en">Unified City Dispatch Service of St. Petersburg</span>
                  </span>
                </div>
              </a>
            </div>

            <div className="header-contacts-group">
              <div className="header-contact">
                <div className="contact-icon">
                  <img src="/assets/envelope-regular 1.png" alt="mail" className="custom-icon" />
                </div>
                <div className="contact-content">
                  <a href="mailto:office@egdsk-spb.ru" className="contact-link">office@egdsk-spb.ru</a>
                </div>
              </div>

              <div className="header-contact">
                <div className="contact-icon">
                  <img src="/assets/lucide_phone-call.png" alt="phone" className="custom-icon" />
                </div>
                <div className="contact-content">
                  <a href="tel:+78001003899" className="contact-link">+7(800)100-38-99</a>
                </div>
              </div>

              <div className="header-contact">
                <div className="contact-icon" style={{ width: '20px' }}></div>
                <div className="contact-content">
                  <a href="tel:+78123093663" className="contact-link">+7(812)309-36-63</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="header-bottom">
        <div className="container-2">
          <div className="header-bottom__wrapper">
            <ul className="main-nav">
              <li className="has-dropdown main-nav__item--catalog">
                <a href="#" className="catalog-btn">
                  <span className="ru">Каталог Оборудования</span>
                  <span className="en">Equipment Catalog</span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="avtomatika.html"><span className="ru">Автоматика проезда</span><span className="en">Access Automation</span></a></li>
                  <li><a href="radioupravlenie.html"><span className="ru">Радиоуправление</span><span className="en">Radio Control</span></a></li>
                  <li><a href="svobodnyy-vyezd.html"><span className="ru">Свободный выезд</span><span className="en">Free Exit</span></a></li>
                  <li><a href="full-catalog.html"><span className="ru">Полный каталог</span><span className="en">Full Catalog</span></a></li>
                </ul>
              </li>
              <li><a href="card.html"><span className="ru">Корзина</span><span className="en">Cart</span></a></li>
              <li><a href="favorites.html"><span className="ru">Избранное</span><span className="en">Favorites</span></a></li>
            </ul>

            <button className="burger-btn" aria-label="Меню">
              <span></span><span></span><span></span>
            </button>

            <div className="mobile-icons">
              <a href="full-catalog.html" title="Поиск"></a>
              <a href="card.html" title="Корзина"></a>
            </div>

            <div className="header-right-group">
              <div className="auth-zone"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;