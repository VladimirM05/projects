import { FC } from 'react';

import { Link } from '@/interfaces/Link';

import './FooterLinksList.pcss';

interface FooterLinksListProps {
	links: Link[];
}

export const FooterLinksList: FC<FooterLinksListProps> = ({ links }) => {
	return (
		<ul className={'footer-links-list'}>
			{links.map(link => (
				<li className="footer-link-item" key={link.text}>
					<a
						className={'footer-link'}
						href={link.href}
						rel={'noopener noreferrer'}
						title={link.text}
					>
						{link.text}
					</a>
				</li>
			))}
		</ul>
	);
};
