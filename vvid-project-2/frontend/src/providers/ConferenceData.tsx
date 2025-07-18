import { createContext, useState, FC, ReactNode, useEffect } from 'react';
import {
  ImportantDataManager,
  PrevueConferenceManager,
  ConfDataManager,
  OrgCommitteeManager,
  ProgCommitteeManager,
  CurrentPlace,
} from '../props/propManagers';
import { ConferenceContextType } from '../props/types';
import { committeeData } from '../stores/CommittetStore';
import { programCommitteeData } from '@/stores/ProgramCommittetData';

export const ConferenceContext = createContext<ConferenceContextType | undefined>(undefined);

export const ConferenceProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [importantData, setImportantData] = useState({ year: 0 });
  const [prevueConference, setPrevueConference] = useState({
    title: '',
    description: ''
  });
  const [confData, setConfData] = useState({
    title: 'XII Всероссийская научная конференция',
    description: 'Конференция состоится с 23 по 29 сентября'
  });
  const [committee, setCommittee] = useState(committeeData);
  const [progCommittee, setProgCommittee] = useState(programCommitteeData);
  const [currPlace, setCurrentPlace] = useState({ currentPlace: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  //___fetch current place___________
  useEffect(() => {
  const fetchCurrentPlace = async () => {
    try {
      const response = await fetch('http://localhost:5000/currentPlace', {
        headers: {
          'Accept': 'application/json',
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ошибка загрузки данных');
      }
      const data = await response.json();
      setCurrentPlace({
        currentPlace: data.place || 1
      });
    } catch (err) {
      console.error('Full error:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };
  fetchCurrentPlace();
  }, []);


  //___fetch importantData data______
  useEffect(() => {
  const fetchImportantData = async () => {
    try {
      const response = await fetch('http://localhost:5000/importantData', {
        headers: {
          'Accept': 'application/json',
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ошибка загрузки данных');
      }
      const data = await response.json();
      setImportantData({
        year: data.year_data || 2025
      });
    } catch (err) {
      console.error('Full error:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };
  fetchImportantData();
  }, []);

  //___fetch prevueConference data______
  useEffect(() => {
  const fetchPreviewData = async () => {
    try {
      const response = await fetch('http://localhost:5000/previewData', {
        headers: {
          'Accept': 'application/json',
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ошибка загрузки данных');
      }
      const data = await response.json();
      setPrevueConference({
        title: data.title || '',
        description: data.description || ''
      });
    } catch (err) {
      console.error('Full error:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };
  fetchPreviewData();
  }, []);

  const managers = {
    importantDataManager: new ImportantDataManager(importantData, setImportantData),
    prevueConferenceManager: new PrevueConferenceManager(prevueConference, setPrevueConference),
    confDataManager: new ConfDataManager(confData, setConfData),
    committeeManagerOrg: new OrgCommitteeManager(committee, setCommittee),
    committeeManagerProg: new ProgCommitteeManager(progCommittee, setProgCommittee),
    currentPlace: new CurrentPlace(currPlace, setCurrentPlace),
    loading,
    error
  };

  return (
    <ConferenceContext.Provider value={managers}>
      {children}
    </ConferenceContext.Provider>
  );
};