import { FC, RefObject, useEffect } from 'react';

import { Preview } from '@/components/Preview/Preview';
import { About } from '@/components/About/About';
import { Trailer } from '@/components/Trailer/TrailerSlider';
import { Modes } from '@/components/Modes/Modes';
import { Locations } from '@/components/Locations/Locations';
import { Drons } from '@/components/Drons/Drons';
import { Guns } from '@/components/Guns/Guns';
import { Application } from '@/components/Application/Application';

interface Main {
	sectionIds: string[];
	sectionRefs: Record<string, RefObject<HTMLElement | null>>;
	scrollToSection: (id: string) => void;
}

const Main: FC<Main> = ({ sectionIds, sectionRefs, scrollToSection }) => {
	useEffect(() => {
		if (typeof window !== 'undefined' && window.location.hash) {
			const hash = window.location.hash.replace('#', '');
			const target = sectionRefs[hash];
			if (target?.current) {
				setTimeout(() => {
					target.current?.scrollIntoView({ behavior: 'smooth' });
				}, 100);
			}
		}
	}, []);

	return (
		<>
			<Preview onScroll={scrollToSection} />
			<About ref={sectionRefs['section-2']} />
			<Trailer ref={sectionRefs['section-3']} />
			<Modes ref={sectionRefs['section-4']} />
			<Locations ref={sectionRefs['section-5']} />
			<Drons ref={sectionRefs['section-6']} />
			<Guns ref={sectionRefs['section-7']} />
			<Application
				ref={sectionRefs['section-8']}
				sectionIds={sectionIds}
				scrollToSection={scrollToSection}
			/>
		</>
	);
};

export default Main;
