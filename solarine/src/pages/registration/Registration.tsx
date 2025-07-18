import { FC } from 'react';

import { RegForm } from '@/components/RegForm/RegForm';

interface RegistrationProps {
	sectionIds: string[];
	scrollToSection: (id: string) => void;
}

const Registration: FC<RegistrationProps> = ({
	sectionIds,
	scrollToSection,
}) => {
	return <RegForm sectionIds={sectionIds} scrollToSection={scrollToSection} />;
};

export default Registration;
