import { FC } from 'react';

import { Logos } from '../Logos/Logos';

import { PoliticsItem } from '@/interfaces/PoliticsItem';

import tg from '@/assets/images/tg.svg';
import vk from '@/assets/images/vk.svg';

import './footer.pcss';

export const Footer: FC = () => {
	interface SocialsItem {
		href: string;
		src: string;
		title: string;
	}

	const socials: SocialsItem[] = [
		{
			href: 'https://web.telegram.org/k/#-2344361524',
			src: tg,
			title: 'Telegram',
		},
		{
			href: 'https://vk.com/im/convo/2000000062?entrypoint=list_all&rp=peer2000000062',
			src: vk,
			title: 'Vkontakte',
		},
	];

	const politics: PoliticsItem[] = [
		{ text: 'Политика конфиденциальности' },
		{ text: 'Условия предоставления услуг' },
		{ text: 'Настройки cookies' },
	];

	return (
		<footer id="footer" className={'footer'}>
			<div className="container">
				<div className={'footer-info'}>
					<div className={'footer-socials'}>
						<Logos />
						<div className={'footer-address'}>
							<h6 className={'footer-address-title'}>Адрес:</h6>
							<a
								className={'footer-address-link'}
								href={
									'https://yandex.ru/maps/971/taganrog/?ll=38.929112%2C47.206691&mode=search&sll=38.928877%2C47.206828&text=47.206828%2C38.928877&z=17.06'
								}
							>
								Адрес
							</a>
						</div>
						<div className={'footer-contacts'}>
							<h6 className={'footer-contacts-title'}>Контакты:</h6>
							<a className={'footer-contacts-tel'} href={'tel:12345678'}>
								+1234567890
							</a>
							<br />
							<a className={'footer-contacts-mail'} href={'mailto:'}>
								почта
							</a>
						</div>
						<ul className="footer-socials-list">
							{socials.map(item => (
								<li className="footer-socials-item" key={item.title}>
									<a
										className="footer-socials-link"
										href={item.href}
										title={item.title}
										rel={'noopener noreferrer'}
										target={'_blank'}
									>
										<img
											className="footer-socials-img"
											src={item.src}
											alt={item.title}
										/>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<hr className={'horizontal-line'} />
				<div className={'footer-copyright'}>
					<span className={'footer-copyright-text'}>
						© 2024 ЮФУ. Все права защищены.
					</span>
					<div className={'footer-politics'}>
						{politics.map(item => (
							<ul className={'footer-politics-list'} key={item.text}>
								<li className={'footer-politics-item'}>
									<span className={'footer-politics-text'}>{item.text}</span>
								</li>
							</ul>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};
