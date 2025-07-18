import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import taganrogImg from '@/assets/images/taganrog.jpeg';
import './Location.pcss';

export const Taganrog: FC = () => {
  return (
    <section id="location" className="section location">
      <div className="location-inner">
        <h2 className="location-title">Место проведения</h2>
        <div className="image-wrapper">
          <h3 className="city-name">Таганрог</h3>
          <img 
            className="location-img"
            src={taganrogImg} 
            alt="Таганрог" 
          />
          <div className="image-overlay">
            <NavLink className="learn-more-btn" to="/PlaceLocation">
              Узнать подробнее
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};