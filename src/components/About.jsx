import React from 'react';

function About({ title }) {
  return (
    <section className="about">
      <div className="container">
        <h1 className="title-main">
          <span className="ru">{title.ru}</span>
          <span className="en">{title.en}</span>
        </h1>
        <div className="about__content">
          <p className="about__text">
            <span className="ru">Компания «ЕГДС-СПб» занимается оказанием комплекса услуг систем безопасности дворовой территории в Санкт-Петербурге и Ленинградской области.</span>
            <span className="en">EGDS-Spb provides comprehensive security services for yard territories in St. Petersburg and Leningrad Region.</span>
          </p>
          <p className="about__text">
            <span className="ru">Наша компания предлагает услуги по:</span>
            <span className="en">Our company offers services for:</span>
          </p>
          <ul className="about__list">
            <li>
              <span className="ru">удалённой «умной диспетчеризации» (мы имеем большой штат диспетчеров, работающих 24 часа и имеющих дополнительно видеоконтроль объекта. Все разговоры оператора записываются. Ведётся видеоархив с предоставлением необходимых видеозаписей);</span>
              <span className="en">remote "smart dispatching" (24/7 dispatchers with video surveillance, recorded conversations, and video archive access);</span>
            </li>
            <li>
              <span className="ru">установке систем автоматизации проезда (установка автоматических ворот, шлагбаумов, оградительных элементов);</span>
              <span className="en">access automation systems installation (automatic gates, barriers, fencing elements);</span>
            </li>
            <li>
              <span className="ru">организации многочисленных вариантов управления (собственное мобильное приложение, распознавание автомобильного номера, радиометка дальнего радиуса действия, радиобрелок, бесконтактный брелок, въезд по гостевому коду, автоматический выезд, аварийное открытие);</span>
              <span className="en">multiple control options (mobile app, license plate recognition, long-range RFID, radio keys, guest codes, automatic exit, emergency opening);</span>
            </li>
            <li>
              <span className="ru">комплексное техническое обслуживание (устранение неисправностей в кратчайший период и "горячая" замена вышедшего из строя оборудования).</span>
              <span className="en">comprehensive technical support (quick troubleshooting and "hot" equipment replacement).</span>
            </li>
          </ul>
          <p className="about__text">
            <span className="ru">Наша система защищена от дублирования элементов управления автоматикой проезда.</span>
            <span className="en">Our system is protected from duplication of access control elements.</span>
          </p>
          <p className="about__text">
            <span className="ru">Наша система обладает удобным интерфейсом управления и максимально информативным журналом событий, где отображаются все действия системы с привязкой видеоизображения.</span>
            <span className="en">Our system has a user-friendly interface and informative event log with video attachment for all actions.</span>
          </p>
        </div>
        <button type="button" className="about__read-more">
          <span className="ru">Читать далее</span>
          <span className="en">Read more</span>
        </button>
        <hr className="about__divider" />
      </div>
    </section>
  );
}

export default About;