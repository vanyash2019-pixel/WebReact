import React from 'react';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-top">
                    {/* Колонка Услуги */}
                    <div className="footer-col col-help">
                        <h4 className="footer-heading heading-help">
                            <span className="ru">Услуги</span><span className="en">Help</span>
                        </h4>
                        <ul className="footer-list list-help">
                            <li><a href="/cart"><span className="ru">Корзина</span><span className="en">Cart</span></a></li>
                            <li><a href="/favorites"><span className="ru">Избранное</span><span className="en">Favorites</span></a></li>
                            <li><a href="/lk"><span className="ru">Личный кабинет</span><span className="en">Account</span></a></li>
                            <li><a href="/catalog"><span className="ru">Полный каталог</span><span className="en">Full catalog</span></a></li>
                        </ul>
                    </div>

                    {/* Колонка Настройки (Темы, язык, шрифты) */}
                    <div className="footer-col col-products">
                        <h4 className="footer-heading heading-products">
                            <span className="ru">Настройки</span><span className="en">Settings</span>
                        </h4>
                        <div className="products-grid-wrapper">
                            <ul className="footer-list list-products-left">
                                <li><button id="footer-theme-dark"><span className="ru">Тёмная тема</span><span className="en">Dark theme</span></button></li>
                                <li><button id="footer-theme-light"><span className="ru">Светлая тема</span><span className="en">Light theme</span></button></li>
                                <li><button id="footer-lang-ru"><span className="ru">Русский язык</span><span className="en">Russian</span></button></li>
                            </ul>
                            <ul className="footer-list list-products-right">
                                <li><button id="footer-font-normal"><span className="ru">A Обычный шрифт</span></button></li>
                                <li><button id="footer-font-large"><span className="ru">A+ Средний шрифт</span></button></li>
                                <li><button id="footer-lang-en"><span className="ru">Английский язык</span><span className="en">English</span></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p className="copyright-text">
                        <span className="ru">2010-2024, Системы безопасности в Санкт-Петербурге (СПБ) | Интеллект Про</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}