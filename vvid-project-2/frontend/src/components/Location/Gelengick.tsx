import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import taganrogImg from '@/assets/images/gelengic.png';
import './Location.pcss';

export const Gelendzhik: FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/main');
  };

  return (
    <section id="location" className="location-section">
      <div className="location-container">
        <h2 className="location-title">Место проведения</h2>
        <div className="image-wrapper">
          <h3 className="city-name">Геленжик</h3>
          <img 
            src={taganrogImg} 
            alt="Таганрог" 
            className="location-image"
          />
          <div className="image-overlay">
            <button className="learn-more-btn" onClick={handleLearnMore}>
              Узнать подробнее
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};