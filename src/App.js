import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 
        Здесь вставьте JSX-разметку первой части вашего HTML (Header, Слайдер), 
        не забыв заменить class на className и закрыть одиночные теги (<img />, <br />).
      */}

      <main>
        {/* Вторая часть вашего кода */}
        <section className="steps-section">
          <div className="container">
            <div className="step-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-text">
                  <h4 className="step-title">
                    <span className="ru">Инициатива по установке шлагбаума</span>
                    <span className="en">Initiative to install a barrier gate</span>
                  </h4>
                  <p className="step-desc">
                    <span className="ru">Получение плана межевания. Общение с администрацией / муниципальными депутатами. Оценка реалистичности установки шлагбаума. Составить план установки. Получение коммерческого предложения.</span>
                    <span className="en">Obtain land survey plan. Communicate with administration. Assess feasibility. Create installation plan. Receive commercial proposal.</span>
                  </p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-text">
                  <h4 className="step-title">
                    <span className="ru">Получение разрешения</span>
                    <span className="en">Obtaining permission</span>
                  </h4>
                  <p className="step-desc">
                    <span className="ru">Проведение собрания собственников МКД. Получение разрешение от Совета депутатов или Администрации города.</span>
                    <span className="en">Hold apartment owners meeting. Obtain permission from Council of Deputies or City Administration.</span>
                  </p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-text">
                  <h4 className="step-title">
                    <span className="ru">Установка шлагбаума</span>
                    <span className="en">Barrier gate installation</span>
                  </h4>
                  <p className="step-desc">
                    <span className="ru">Заключение договоров с собственниками МКД.</span>
                    <span className="en">Sign contracts with apartment building owners.</span>
                  </p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-text">
                  <h4 className="step-title">
                    <span className="ru">Обслуживание шлагбаума</span>
                    <span className="en">Barrier gate maintenance</span>
                  </h4>
                  <p className="step-desc">
                    <span className="ru">Диспетчеризация шлагбаума. Плановое и внеплановое техническое обслуживание.</span>
                    <span className="en">Barrier gate dispatching. Scheduled and unscheduled technical maintenance.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partners-section">
          <div className="container">
            <h2 className="partners-title">
              <span className="ru">С нами работают</span>
              <span className="en">Our Partners</span>
            </h2>
            <div className="partners-slider-wrapper">
              <button type="button" className="partners-arrow prev" id="partner-prev">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="#cc0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="partners-track" id="partner-track">
                <div className="partner-item"><img src="assets/e8f5a324-8d3d-4528-871b-b6cb7fb5d429 1.png" alt="Партнер 1" /></div>
                <div className="partner-item"><img src="assets/Logo 2 (1).png" alt="Партнер 2" /></div>
                <div className="partner-item"><img src="assets/Logo 3.png" alt="Партнер 3" /></div>
                <div className="partner-item"><img src="assets/Logo 4.png" alt="Партнер 4" /></div>
                <div className="partner-item"><img src="assets/Logo 5.png" alt="Партнер 5" /></div>
                <div className="partner-item"><img src="assets/Logo 6.png" alt="Партнер 6" /></div>
                <div className="partner-item"><img src="assets/Logo 7.png" alt="Партнер 7" /></div>
                <div className="partner-item"><img src="assets/Logo 8 (1).jpg" alt="Партнер 8" /></div>
              </div>
              <button type="button" className="partners-arrow next" id="partner-next">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="#cc0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </section>

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

        <section className="callback-section">
          <div className="container">
            <div className="callback-wrapper">
              <div className="callback-content">
                <h3 className="callback-title">
                  <span className="ru">Если у вас появилось желание оставить отзыв, то не ждите! Нам важно ваше мнение!</span>
                  <span className="en">If you want to leave a review, don't wait! Your opinion matters to us!</span>
                </h3>
              </div>
              <div className="callback-action">
                <button type="button" id="open-review-modal" className="callback-btn">
                  <span className="ru">Написать отзыв</span>
                  <span className="en">Leave a Review</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

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
                <li><a href="full-catalog.html"><span className="ru">Полный каталог</span><span className="en">Full catalog</span></a></li>
              </ul>
            </div>
            <div className="footer-col col-services">
              <h4 className="footer-heading heading-services">
                <span className="ru">Товары</span><span className="en">Services</span>
              </h4>
              <ul className="footer-list list-services">
                <li><a href="avtomatika.html"><span class="ru">Автоматика проезда</span><span className="en">Access Automation</span></a></li>
                <li><a href="svobodnyy-vyezd.html"><span class="ru">Свободный выезд</span><span className="en">Free Exit</span></a></li>
                <li><a href="radioupravlenie.html"><span class="ru">Радиоуправление</span><span className="en">Radio Control</span></a></li>
              </ul>
            </div>
            <div className="footer-col col-products">
              <h4 className="footer-heading heading-products">
                <span className="ru">Настройки</span><span className="en">Settings</span>
              </h4>
              <div className="products-grid-wrapper">
                <ul className="footer-list list-products-left">
                  <li><a href="#!"><span className="ru">Тёмная тема</span><span className="en">Dark theme</span></a></li>
                  <li><a href="#!"><span className="ru">Светлая тема</span><span className="en">Light theme</span></a></li>
                  <li><a href="#!"><span className="ru">Терминал тема</span><span className="en">Terminal theme</span></a></li>
                  <li><a href="#!"><span className="ru">Русский язык</span><span className="en">Russian</span></a></li>
                </ul>
                <ul className="footer-list list-products-right">
                  <li><a href="#!"><span className="ru">A Обычный шрифт</span><span className="en">A Normal font</span></a></li>
                  <li><a href="#!"><span className="ru">A+ Средний шрифт</span><span className="en">A+ Medium font</span></a></li>
                  <li><a href="#!"><span className="ru">A++ Большой шрифт</span><span className="en">A++ Large font</span></a></li>
                  <li><a href="#!"><span className="ru">Английский язык</span><span className="en">English</span></a></li>
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
                      <span className="ru">+7(812)309-36-63<br /></span>
                      <span className="en">+7(812)309-36-63<br /></span>
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
              <span className="ru">2010-2024, Системы безопасности в Санкт-Петербурге (СПБ) | Интеллект Про | Все права защищены.<br />Информация о ценах на сайте не является публичной офертой.</span>
              <span className="en">2010-2024, Security Systems in St. Petersburg | Intellekt Pro | All rights reserved.<br />Price information on the website is not a public offer.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;