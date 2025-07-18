import { FC } from 'react';

import { menu } from '@/store/menu';

import './footer.pcss';

interface Footer {
	sectionIds: string[];
	onScroll: (id: string) => void;
}

export const Footer: FC<Footer> = ({ sectionIds, onScroll }) => {
	return (
		<footer className={'footer'}>
			<div className={'container'}>
				<div className={'footer-inner'}>
					<div className={'footer-container'}>
						<div className={'company-info'}>
							<h6 className={'company-name'}>ООО «Соларайн»</h6>
							<span className={'company-inn'}>ИНН 6154168406</span>
						</div>
						<nav className={'footer-menu'}>
							<ul className={'footer-menu-list'}>
								{menu.map((item, idx) => {
									const sectionId = sectionIds[idx + 1];
									return (
										<li className={'footer-menu-item'} key={item.text}>
											<button
												className={'footer-menu-link'}
												onClick={() => onScroll(sectionId)}
											>
												{item.text}
											</button>
										</li>
									);
								})}
							</ul>
							<span className="game-name">Симулятор «НЕБО-ЗЕМЛЯ»</span>
						</nav>
					</div>
					<a
						className={'company-mail'}
						href={'mailto:solarineofficial@gmail.com'}
					>
						solarineofficial@gmail.com
					</a>
				</div>
			</div>
		</footer>
	);
};
