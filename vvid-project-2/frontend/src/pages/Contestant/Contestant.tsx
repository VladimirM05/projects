import ContestantTable from '@/components/ContestantTable/contestant-table';
import { FC } from 'react';

const Contestant: FC = () => {
	return (
	<div>
      <h1>Участники конкурса</h1>
      <ContestantTable />
    </div>
	);
};

export default Contestant;
