import { FC, RefObject, Suspense, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ScrollToTop } from './utilities/ScrollToTop';

import { Main } from '@/pages/main';
import { Game } from '@/pages/game';

import { Header } from '@/components/Header/Header';

import '@/assets/styles/global.pcss';

const sectionIds = Array.from({ length: 100 }, (_, i) => `section-${i + 1}`);

export const App: FC = () => {
	const sectionRefs: Record<
		string,
		RefObject<HTMLElement | null>
	> = sectionIds.reduce((acc, id) => {
		acc[id] = useRef<HTMLElement | null>(null);
		return acc;
	}, {} as Record<string, RefObject<HTMLElement | null>>);

	const scrollToSection = (id: string) => {
		sectionRefs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<ScrollToTop />
			<Header sectionIds={sectionIds} scrollToSection={scrollToSection} />
			<main className={'main'}>
				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback="Loading...">
								<Main
									sectionIds={sectionIds}
									sectionRefs={sectionRefs}
									scrollToSection={scrollToSection}
								/>
							</Suspense>
						}
					/>
					<Route
						path="/Game"
						element={
							<Suspense fallback="Loading...">
								<Game />
							</Suspense>
						}
					/>
					<Route path="*" />
				</Routes>
			</main>
		</>
	);
};
