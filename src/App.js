import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import EquipmentCatalog from './components/EquipmentCatalog';
import WorksSection, { worksData } from './components/WorksSection';
import StepsSection, { stepsData } from './components/StepsSection';
import PartnersSection, { partnersData } from './components/PartnersSection';
import MapSection from './components/MapSection';
import CallbackSection from './components/CallbackSection';
import Footer from './components/Footer';
import ReviewModal from './components/ReviewModal';

const ORG_NAME = 'ЕГДС';

const aboutTitle = {
  ru: 'Установка умной системы диспетчеризации',
  en: 'Smart Dispatching System Installation',
};

const equipmentItems = [
  {
    id: 1,
    title: { ru: 'Автоматика проезда', en: 'Access Automation' },
    icon: '/assets/barriers_7z3uzito3vkb 1.svg',
    link: 'avtomatika.html',
  },
  {
    id: 2,
    title: { ru: 'Свободный выезд', en: 'Free Exit' },
    icon: '/assets/exit_8xem5xs575cf 1.svg',
    link: 'svobodnyy-vyezd.html',
  },
  {
    id: 3,
    title: { ru: 'Радиоуправление', en: 'Radio Control' },
    icon: '/assets/remote_control_nw2uc52wjfq4 1.svg',
    link: 'radioupravlenie.html',
  },
];

function App() {
  return (
    <div className="App">
      <Header orgName={ORG_NAME} />
      <main className="main">
        <HeroSlider />
        <About title={aboutTitle} />
        <EquipmentCatalog items={equipmentItems} />
        <WorksSection works={worksData} />
        <StepsSection steps={stepsData} />
        <PartnersSection partners={partnersData} />
        <MapSection />
        <CallbackSection />
      </main>
      <Footer orgName={ORG_NAME} />
      <ReviewModal />
    </div>
  );
}
export default App;