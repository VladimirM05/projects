import { FC } from 'react';
import './participantSection.pcss';
import { NavLink } from 'react-router-dom';

interface Materials {
	text: string;
	href: string;
}

export const ParticipantSection: FC = () => {
	const materials: Materials[] = [
		{
			text: 'Сборник научных трудов VII Всероссийской научной конференции "Системный синтез и прикладная синергетика" (ССПС-2015)',
			href: 'conf-15.pdf',
		},
		{
			text: 'Сборник научных трудов VII Всероссийской научной конференции "Системный синтез и прикладная синергетика" (ССПС-2015)',
			href: 'conf-17.pdf',
		},
		{
			text: 'Сборник научных трудов VIII Всероссийской научной конференции "Системный синтез и прикладная синергетика" (ССПС-2017)',
			href: 'conf-19.pdf',
		},
		{
			text: 'Сборник научных трудов IX Всероссийской научной конференции "Системный синтез и прикладная синергетика" (ССПС-2019)',
			href: '#conf-21.pdf',
		},
		{
			text: 'Сборник научных трудов X Всероссийской научной конференции "Системный синтез и прикладная синергетика" (ССПС-2021)',
			href: 'conf-22.pdf',
		},
		{
			text: 'Сборник научных трудов XI Всероссийской научной конференции "Системный синтез и прикладная синергетика" (ССПС-2022)',
			href: 'conf-24.pdf',
		},
	];

	const materialButtons: Materials[] = [
		{
			text: 'Программа конференции',
			href: 'empty-1.docx',
		},
		{
			text: 'Доклады',
			href: 'empty-2.docx',
		},
		{
			text: 'Галерея',
			href: 'empty-3.docx',
		},
		{
			text: 'Шаблон доклада (заявка)',
			href: 'empty-4.docx',
		},
		{
			text: 'Членский взнос',
			href: 'empty-5.docx',
		},
	];

	return (
		<section id="participant" className="participant-section">
			<div className="participant-container">
				<h2 className="participant-title">Участнику</h2>
				<div className="participant-columns">
					<div className="participant-column">
						<h3 className="column-title">Материалы конференций прошлых лет</h3>
						<div className="materials-list">
							{materials.map((material, i) => (
								<a
									key={i}
									href={materials[i].href}
									className="material-link"
									target={'_blank'}
									rel={'noopener noreferrer'}
								>
									{material.text}
								</a>
							))}
						</div>
					</div>
					<div className="participant-column">
						<h3 className="column-title">
							________________________________________________
						</h3>
						<div className="buttons-grid">
							<NavLink className="material-link" to={'/About'}>
								{'Оргкоммитет'}
							</NavLink>
							{materialButtons.map((button, i) => (
								<a
									className="action-button"
									href={materialButtons[i].href}
									download
									key={button.text}
								>
									{button.text}
								</a>
							))}
						</div>
						<h3 className="column-title">
							________________________________________________
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};
