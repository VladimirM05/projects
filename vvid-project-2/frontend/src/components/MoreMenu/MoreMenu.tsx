import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './more-menu.pcss';

export const MoreMenu: FC = () => {
	interface moreItem {
		text: string;
		href: string;
	}

	const moreItems: moreItem[] = [
		{
			text: 'Участники',
			href: '/Contestant',
		},
		{
			text: 'Оргкомитет',
			href: '/About',
		},
		{
			text: 'Заявка',
			href: '/',
		},
		{
			text: 'Программа конференций',
			href: 'https://webictis.sfedu.ru/ssas/Program2024.pdf',
		},
	];

	return (
		<nav className={'more-menu'}>
			<ul className={'more-menu-list'}>
				{moreItems.map(moreItem => (
					<li className={'more-menu-item'}>
						<NavLink
							className={'more-menu-link'}
							to={moreItem.href}
							key={moreItem.text}
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							{moreItem.text}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
