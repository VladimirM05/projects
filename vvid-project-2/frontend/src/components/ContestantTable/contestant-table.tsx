// src/components/ContestantTable.tsx
import { useState, useEffect } from 'react';
import './ContestantTable.pcss';

interface IContestant {
  queue: number;
  fio: string;
  organization: string;
  participation: string;
  direction: string;
  theme_of_perfomance: string;
}

export default function ContestantTable() {
  const [data, setData] = useState<IContestant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortField, setSortField] = useState<keyof IContestant>('queue');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/contestants');
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных с сервера');
        }
        const contestants: IContestant[] = await response.json();
        setData(contestants);
      } catch (err) {
        setError('Ошибка загрузки данных. Пожалуйста, попробуйте позже.');
        console.error('Ошибка при загрузке данных:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSort = (field: keyof IContestant) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortField === 'queue') {
      return sortDirection === 'asc' ? a.queue - b.queue : b.queue - a.queue;
    }
    const aValue = a[sortField]?.toString() || '';
    const bValue = b[sortField]?.toString() || '';
    return sortDirection === 'asc' 
      ? aValue.localeCompare(bValue) 
      : bValue.localeCompare(aValue);
  });

  const getSortIndicator = (field: keyof IContestant) => {
    if (field !== sortField) return null;
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Загрузка данных...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button 
          className="retry-button"
          onClick={() => window.location.reload()}
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="empty-state">
        <p>Нет данных для отображения</p>
      </div>
    );
  }

  return (
    <section className="contestant-table-container">
      <div className="table-header">
        <h2>Участники конференции</h2>
      </div>
      
      <table className="contestant-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('queue')}>
              № {getSortIndicator('queue')}
            </th>
            <th onClick={() => handleSort('fio')}>
              Ф.И.О. {getSortIndicator('fio')}
            </th>
            <th onClick={() => handleSort('organization')}>
              Организация {getSortIndicator('organization')}
            </th>
            <th onClick={() => handleSort('participation')}>
              Участие {getSortIndicator('participation')}
            </th>
            <th onClick={() => handleSort('direction')}>
              Направление {getSortIndicator('direction')}
            </th>
            <th onClick={() => handleSort('theme_of_perfomance')}>
              Тема доклада {getSortIndicator('theme_of_perfomance')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((contestant) => (
            <tr key={`${contestant.queue}-${contestant.fio}`}>
              <td>{contestant.queue + 1}</td>
              <td>{contestant.fio}</td>
              <td>{contestant.organization}</td>
              <td>{contestant.participation}</td>
              <td>{contestant.direction}</td>
              <td>{contestant.theme_of_perfomance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}