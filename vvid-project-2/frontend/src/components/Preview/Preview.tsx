import { FC, useContext } from 'react';
import RegBtn from '../Btns/RegBtn/RegBtn';
import { ConferenceContext } from '@/providers/ConferenceData';
import preview from '@/assets/images/preview.jpg';
import sfedu from '@/assets/images/sfedu.png';
import ncfu from '@/assets/images/ncfu.png';
import leti from '@/assets/images/leti.png';
import sao from '@/assets/images/sao.png';
import './Preview.pcss';

interface Organizers {
  src: string;
  text: string;
}

export const Preview: FC = () => {
  const { importantDataManager, prevueConferenceManager } =
    useContext(ConferenceContext)!;

  const organizersData: Organizers[] = [
    {
      src: sfedu,
      text: 'Южный Федеральный Университет',
    },
    {
      src: ncfu,
      text: 'Северо-Кавказский Федеральный Университет',
    },
    {
      src: leti,
      text: 'Санкт-Петербургский государственный электротехнический университет «ЛЭТИ»',
    },
    {
      src: sao,
      text: 'Специальная астрофизическая обсерватория РАН',
    },
  ];

  return (
    <section className="preview">
      <div className="preview-background">
        <img src={preview} alt="preview background" className="preview-bg-img" />
      </div>
      
      <div className="preview-content">
        <div className="preview-info">
          <div className="preview-text-box">
            <h2 className="preview-title">
              {prevueConferenceManager.getState().title}{' '}
              {importantDataManager.getState().year}
            </h2>
            <p className="preview-description">
              {prevueConferenceManager.getState().description}
            </p>
            <RegBtn />
          </div>
        </div>
        
        <div className="preview-organizers">
          <h3 className="organizers-title">Организаторы</h3>
          <div className="organizers-grid">
            {organizersData.map((org, index) => (
              <div className="organizer-card" key={index}>
                <img 
                  src={org.src} 
                  alt={org.text} 
                  className="organizer-logo" 
                />
                <p className="organizer-text">{org.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};