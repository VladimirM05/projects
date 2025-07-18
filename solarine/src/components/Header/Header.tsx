import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { menu } from '@/store/menu';

import logo from '@/assets/images/logo.png';
import mail from '@/assets/images/mail.png';
import tg from '@/assets/images/tg.png';

import './header.pcss';

interface Header {
	sectionIds: string[];
	scrollToSection: (id: string) => void;
}

interface Contacts {
	src: string;
	href: string;
	alt: string;
}

export const Header: FC<Header> = ({ sectionIds, scrollToSection }) => {
	const lcoation = useLocation();
	const isManePage = location.pathname === '/';

	const contacts: Contacts[] = [
		{ href: 'mailto:', src: mail, alt: 'Mail' },
		{ href: '!#', src: tg, alt: 'Telegram' },
	];

	return (
		<header className={'header'}>
			<div className={'header-inner'}>
				<div className={'logo'}>
					<NavLink
						className={'logo-link'}
						to={'/'}
						title={'Перейти на Главную'}
					>
						<img className={'logo-img'} src={logo} alt={'Solarine'} />
					</NavLink>
				</div>
				<nav className={'menu'}>
					<ul className={'menu-list'}>
						<li className={'menu-item'} key={'Игра'}>
							<NavLink className={'menu-link'} to={'/game'}>
								ПОПРОБОВАТЬ
							</NavLink>
						</li>
						{menu.map((item, idx) => {
							const sectionId = sectionIds[idx + 1];
							return (
								<li className={'menu-item'} key={item.text}>
									{isManePage ? (
										<button
											className={'menu-link'}
											onClick={() => scrollToSection(sectionId)}
										>
											{item.text}
										</button>
									) : (
										<NavLink className={'menu-link'} to={`/#${sectionId}`}>
											{item.text}
										</NavLink>
									)}
								</li>
							);
						})}
					</ul>
				</nav>
				<div className={'contacts'}>
					<div className={'social'}>
						{contacts.map(contact => (
							<a
								className={'social-link'}
								href={'mailto:'}
								title={contact.alt}
								target={'_blank'}
								rel={'noopener noreferrer'}
								key={contact.alt}
							>
								<img
									className={'social-img'}
									src={contact.src}
									alt={contact.alt}
								/>
							</a>
						))}
					</div>
					<a className={'phone'} href={'tel:+7 (900) 125-06-85'}>
						+7 (900) 125-06-85
					</a>
				</div>
			</div>
		</header>
	);
};
