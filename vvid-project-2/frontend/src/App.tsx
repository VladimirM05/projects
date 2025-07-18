import {
	FC,
	Dispatch,
	SetStateAction,
	useState,
	Suspense,
	createContext,
} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Main } from '@/pages/Main/index';
import { AdminPage } from '@/pages/AdminPage/index';
import { About } from '@/pages/About/index';
import { Registration } from '@/pages/RegistrationPage';
import { PlaceLocation } from '@/pages/PlaceLocation';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { ScrollToTop } from '@/utilities/ScrollToTop';

import { Posts } from '@/interfaces/Posts';

import { ConferenceProvider } from '@/providers/ConferenceData';

import '@/assets/styles/global.pcss';
import { Contestant } from './pages/Contestant';

export const PostsContext = createContext<
	| {
			posts: Posts[];
			setPosts: Dispatch<SetStateAction<Posts[]>>;
	  }
	| undefined
>(undefined);

export const App: FC = () => {
	const [userSignIn, setUserSignIn] = useState<boolean>(false);
	const [posts, setPosts] = useState<Posts[]>([
		{
			img: '',
			category: '',
			title: '',
			descr: '',
			author: [
				{
					img: '',
					name: '',
					surname: '',
					date: '',
					readTime: '',
				},
			],
		},
	]);

	return (
		<ConferenceProvider>
			<Router>
				<ScrollToTop />
				<Header />
				<PostsContext.Provider value={{ posts, setPosts }}>
					<Routes>
						<Route
							path="/"
							element={
								<Suspense fallback="Loading...">
									<Main />
								</Suspense>
							}
						/>
						<Route
							path="/admin"
							element={
								<Suspense fallback="Loading...">
									<AdminPage />
								</Suspense>
							}
						/>
						<Route
							path="/about"
							element={
								<Suspense fallback="Loading...">
									<About />
								</Suspense>
							}
						/>
						<Route
							path="/Contestant"
							element={
								<Suspense fallback="Loading...">
									<Contestant />
								</Suspense>
							}
						/>
						<Route
							path="/Registration"
							element={
								<Suspense fallback="Loading...">
									<Registration
										userSignIn={userSignIn}
										setUserSignIn={setUserSignIn}
									/>
								</Suspense>
							}
						/>
						<Route
							path="/PlaceLocation"
							element={
								<Suspense fallback="Loading...">
									<PlaceLocation />
								</Suspense>
							}
						/>
						<Route path="*" element={<div>404 Not Found</div>} />
					</Routes>
				</PostsContext.Provider>
				<Footer />
			</Router>
		</ConferenceProvider>
	);
};
