import { FC } from 'react';

import './section.pcss';

export const Sections: FC = () => {
  const sections = [
    'Проблемы самоорганизации и управления в сложных технических системах',
    'Интеллектуальная обработка информации',
    'Информационная безопасность',
    'Искусственный интеллект в управлении: теория и практика',
    'Управление системами с распределенными параметрами',
    'Математическое моделирование в астрофизике, геофизике и инженерных науках',
    'Проблемы математического моделирования и управления в области медицины',
    'Беспилотные автоматизированные системы',
    'Современные образовательные технологии в области подготовки инженерных кадров'
  ];

  return (
    <section id="sections" className="section sections">
      <div className="sections-container">
        <h2 className="sections-title">Секции</h2>
        <div className="sections-list">
          {sections.map((section, index) => (
            <div key={index} className="section-item">
              <span className="section-number">{index + 1}.</span>
              <p className="section-text">{section}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};