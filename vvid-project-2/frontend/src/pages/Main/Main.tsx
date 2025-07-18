import { FC, Dispatch, SetStateAction, useContext } from 'react';
import { Preview } from '@/components/Preview/Preview';
import { ConferenceContext } from '@/providers/ConferenceData';


import { Taganrog } from '@/components/Location/Taganrog';
import { Gelendzhik } from '@/components/Location/Gelengick';
import { Sections } from '@/components/Sections/Sections';
import { ImportantDates } from '@/components/ImportantDate/ImportantDates';
import { ParticipantSection } from '@/components/Participant/ParticipantSection';


const Main: FC = () => {
	const {currentPlace} = useContext(ConferenceContext)!;
	return (
	  <>
		<Preview/>
		{currentPlace.getState().currentPlace === 1 && <Taganrog/>}
		{currentPlace.getState().currentPlace === 2 && <Gelendzhik/>}
		<Sections/>
		<ImportantDates/>
		<ParticipantSection/>
	  </>
	);
  };
  
  export default Main;
