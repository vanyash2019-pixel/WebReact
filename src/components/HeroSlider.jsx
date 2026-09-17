import React from 'react';

const slidesData = [
  {
    id: 1,
    contentClass: '',
    title: { ru: 'Умная диспетчеризация', en: 'Smart Dispatching' },
    intro: null,
    items: [
      { ru: 'Онлайн-консьерж, живой оператор', en: 'Online concierge, live operator' },
      { ru: 'Диспетчер открывает ворота, шлагбаум для проезда спецтранспорта (скорой помощи, пожарной и т.д)', en: 'Dispatcher opens gates for emergency vehicles (ambulances, fire trucks, etc.)' },
      { ru: 'Оператор работает по регламенту, согласованному с вами (может открывать такси, службе доставки и т.д.)', en: 'Operator works per your agreed regulations (can open for taxis, delivery services, etc.)' },
      { ru: 'Диспетчер ведёт полный видеоконтроль на момент общения с посетителем и чётко понимает ситуацию.', en: 'Dispatcher maintains full video control during visitor communication.' },
      { ru: 'Умная диспетчеризация увеличит пропускную способность вашего проезда', en: 'Smart dispatching increases your entrance throughput' },
      { ru: 'Данная услуга является обязательной согласно Постановление Правительства РФ от 16 сентября 2020 г. N 1479', en: 'This service is mandatory per Russian Government Decree No. 1479 (2020)' },
    ],
    image: '/assets/ofis-2-1536x1060_pixian_ai 1.png',
  },
  {
    id: 2,
    contentClass: 'slide-content--second',
    title: null,
    intro: { ru: 'Установка шлагбаума во дворе позволяет', en: 'Installing a barrier gate in the yard allows you to' },
    items: [
      { ru: 'ограничить проезд на дворовую территорию случайным и нежелательным автомобилям', en: 'restrict access for random and unwanted vehicles' },
      { ru: 'исключить проезд «транзитных» автомобилей', en: 'exclude transit vehicles from passing through' },
      { ru: 'повысить вероятность найти свободное место в "своем" дворе', en: 'increase chances of finding a free spot in your yard' },
      { ru: 'повысить безопасность дворовой территории', en: 'improve yard territory safety' },
    ],
    image: '/assets/Парковка.png',
  },
  {
    id: 3,
    contentClass: 'slide-content--third',
    title: { ru: 'Как управлять шлагбаумом', en: 'How to control the barrier gate' },
    intro: { ru: 'Открытие шлагбаума с помощью:', en: 'Opening the barrier gate using:' },
    items: [
      { ru: 'мобильного приложения', en: 'mobile application' },
      { ru: 'распознавания автомобильных номеров', en: 'license plate recognition' },
      { ru: 'RFID (меток)', en: 'RFID tags' },
      { ru: 'звонком с телефона', en: 'phone call' },
      { ru: 'защищённым персональным пультом', en: 'secure personal remote' },
      { ru: 'система заявок для гостевого транспорта', en: 'guest vehicle request system' },
    ],
    image: '/assets/Group 21.png',
  },
  {
    id: 4,
    contentClass: 'slide-content--fourth',
    title: null,
    intro: { ru: 'Система «Умный шлагбаум»', en: '"Smart Barrier Gate" System' },
    items: [
      { ru: 'Каждое открытие шлагбаума персонализировано', en: 'Each barrier opening is personalized' },
      { ru: 'Фотофиксация проездов автотранспорта', en: 'Photo fixation of vehicle passages' },
      { ru: 'Цифровой контроль за управлением шлагбаумом — внедрение системы распознавания автомобильных номеров', en: 'Digital control with license plate recognition' },
      { ru: 'Статистика управления шлагбаумом, пребывания автомобилей на территории и их количества', en: 'Statistics on barrier management and vehicle presence' },
      { ru: 'Автоматизация внутреннего регламента — контроль ограничений и применение наказаний', en: 'Automation of internal regulations and penalties' },
    ],
    image: '/assets/Машина.png',
  },
];

function HeroSlider() {
  return (
    <section className="hero-slider">
      <div className="slider-wrapper">
        <div className="slider-line">
          {slidesData.map((slide, index) => (
            <div className="slide" key={slide.id}>
              <div className={`slide-content ${slide.contentClass}`}>
                {slide.title && (
                  <h1 className="slide-title">
                    <span className="ru">{slide.title.ru}</span>
                    <span className="en">{slide.title.en}</span>
                  </h1>
                )}
                {slide.intro && (
                  <p style={{ marginBottom: '20px', fontWeight: 400 }}>
                    <span className="ru">{slide.intro.ru}</span>
                    <span className="en">{slide.intro.en}</span>
                  </p>
                )}
                <ul className="slide-list">
                  {slide.items.map((item, i) => (
                    <li className="slide-item" key={i}>
                      <span className="ru">{item.ru}</span>
                      <span className="en">{item.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="slide-picture">
                <img src={slide.image} alt="slide" />
              </div>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {slidesData.map((slide, index) => (
            <span
              className={`dot ${index === 1 ? 'active' : ''}`}
              key={slide.id}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;