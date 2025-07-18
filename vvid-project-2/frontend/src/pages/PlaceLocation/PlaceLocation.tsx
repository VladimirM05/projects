import { FC } from 'react';

import { PlaceTaganrog } from '@/components/PlaceTaganrog/PlaceTaganrog';
// import { PlaceDescription } from '@/components/PlaceDescription/PlaceDescription';
import { PlaceResidence } from '@/components/PlaceResidence/PlaceResidence';

const PlaceLocation: FC = () => {
	return (
		<>
			<PlaceTaganrog />
			{/* <PlaceDescription /> */}
			<PlaceResidence />
		</>
	);
};

export default PlaceLocation;
