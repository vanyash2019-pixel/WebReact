import React from 'react';

function Footer({ orgName }) {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-col col-help">
            <h4 className="footer-heading heading-help">
              <span className="ru">Услуги</span><span className="en">Help</span>
            </h4>
            <ul className="footer-list list-help">
              <li><a href="card.html"><span className="ru">Корзина</span><span className="en">Cart</span></a></li>
              <li><a href="favorites.html"><span className="ru">Избранное</span><span className="en">Favorites</span></a></li>
              <li><a href="lk.html"><span className="ru">Личный кабинет</span><span className="en">Account</span></a></li>
              <li><a href="full-catalog.html"><span className="ru">Полный котолог</span><span className="en">Full catalog</span></a></li>
            </ul>
          </div>

          <div className="footer-col col-services">
            <h4 className="footer-heading heading-services">
              <span className="ru">Товары</span><span className="en">Services</span>
            </h4>
            <ul className="footer-list list-services">
              <li><a href="avtomatika.html"><span className="ru">Автоматика проезда</span><span className="en">Access Automation</span></a></li>
              <li><a href="svobodnyy-vyezd.html"><span className="ru">Свободный выезд</span><span className="en">Free Exit</span></a></li>
              <li><a href="radioupravlenie.html"><span className="ru">Радиоуправление</span><span className="en">Radio Control</span></a></li>
            </ul>
          </div>

          <div className="footer-col col-products">
            <h4 className="footer-heading heading-products">
              <span className="ru">Настройки</span><span className="en">Settings</span>
            </h4>
            <div className="products-grid-wrapper">
              <ul className="footer-list list-products-left">
                <li><a href="#"><span className="ru">Тёмная тема</span><span className="en">Dark theme</span></a></li>
                <li><a href="#"><span className="ru">Светлая тема</span><span className="en">Light theme</span></a></li>
                <li><a href="#"><span className="ru">Терминал тема</span><span className="en">Terminal theme</span></a></li>
                <li><a href="#"><span className="ru">Русский язык</span><span className="en">Russian</span></a></li>
              </ul>
              <ul className="footer-list list-products-right">
                <li><a href="#"><span className="ru">A Обычный шрифт</span><span className="en">A Normal font</span></a></li>
                <li><a href="#"><span className="ru">A+ Средний шрифт</span><span className="en">A+ Medium font</span></a></li>
                <li><a href="#"><span className="ru">A++ Большой шрифт</span><span className="en">A++ Large font</span></a></li>
                <li><a href="#"><span className="ru">Английский язык</span><span className="en">English</span></a></li>
              </ul>
            </div>
          </div>

          <div className="footer-col col-contacts">
            <h4 className="footer-heading heading-contacts">
              <span className="ru">Контакты</span><span className="en">Contacts</span>
            </h4>
            <ul className="spec-contact-list">
              <li className="spec-contact-item">
                <div className="spec-contact-icon"><i className="fa fa-map-marker"></i></div>
                <div className="spec-contact-content">
                  <span className="spec-contact-text">
                    <span className="ru">Санкт-Петербург, наб. р. Карповки 5И</span>
                    <span className="en">St. Petersburg, Karpovka Embankment, 5I</span>
                  </span>
                </div>
              </li>
              <li className="spec-contact-item">
                <div className="spec-contact-icon"><i className="fa fa-phone"></i></div>
                <div className="spec-contact-content">
                  <span className="spec-contact-text">
                    <span className="ru">+7(812)309-36-63</span>
                    <span className="en">+7(812)309-36-63</span>
                  </span>
                </div>
              </li>
              <li className="spec-contact-item">
                <div className="spec-contact-icon"><i className="fa fa-envelope"></i></div>
                <div className="spec-contact-content">
                  <a href="mailto:office@intellekt-pro.ru" className="spec-contact-link">office@intellekt-pro.ru</a>
                </div>
              </li>
              <li className="spec-contact-item">
                <div className="spec-contact-icon"><i className="fa fa-clock-o"></i></div>
                <div className="spec-contact-content">
                  <span className="spec-contact-text">
                    <span className="ru">Пн-Пт, 10-19</span>
                    <span className="en">Mon-Fri, 10:00-19:00</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            <span className="ru">2010-2024, {orgName} | Системы безопасности в Санкт-Петербурге (СПБ) | Интеллект Про | Все права защищены.<br />Информация о ценах на сайте не является публичной офертой.</span>
            <span className="en">2010-2024, {orgName} | Security Systems in St. Petersburg | Intellekt Pro | All rights reserved.<br />Price information on the website is not a public offer.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;