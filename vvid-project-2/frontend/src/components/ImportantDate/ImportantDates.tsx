import { FC } from 'react';
import './importantDates.pcss'; 

export const ImportantDates: FC = () => {
  const dates = [
    { date: '01.09.2024', description: 'Представление текстов докладов и регистрационных форм' },
    { date: '08.09.2024', description: 'Информирование авторов о результатах экспертизы докладов' },
    { date: '15.09.2024', description: 'Оплата оргвзноса за опубликование принятых докладов' },
    { date: '23.09.2024', description: 'Начание работы конференции' }
  ];

  return (
    <section id="dates" className="important-dates">
      <div className="dates-container">
        <h2 className="dates-title">Важные даты</h2>
        <div className="dates-list">
          {dates.map((item, index) => (
            <div key={index} className="date-item">
              <span className="date-value">{item.date}</span>
              <p className="date-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};