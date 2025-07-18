import { FC } from 'react';

import main from '@/assets/images/all-russian-conf.svg';

import './logos.pcss';

export const Logos: FC = () => {
	interface Logo {
		href: string;
		src: string;
		title: string;
	}

	const logos: Logo[] = [
		{
			href: '/',
			src: main,
			title: 'Main',
		},
	];

	return (
		<div className={'logos'}>
			{logos.map(logo => (
				<a
					href={logo.href}
					className={'logo-link'}
					key={logo.title}
					target={'_blank'}
					rel={'noopener noreferrer'}
					title={logo.title}
				>
					<img className={'logo-img'} src={logo.src} alt={logo.title} />
				</a>
			))}
		</div>
	);
};
