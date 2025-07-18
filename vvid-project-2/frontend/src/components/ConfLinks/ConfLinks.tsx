import { FC } from 'react';

import RegBtn from '../Btns/RegBtn/RegBtn';

import schedule from '@/assets/images/schedule.png';
import groupPeople from '@/assets/images/group-people.png';
import presentation from '@/assets/images/presentation.png';

import './conf-links.pcss';

export const ConfLinks: FC = () => {
	return (
		<section className="conf-links">
			<div className="container">
				<div className="conf-links-inner">
					<div className="connect">
						<div className="connect-container">
							<h6 className="connect-subtitle">Подключение</h6>
							<h4 className="connect-title">
								Основные ссылки для участия в конференции
							</h4>
						</div>
						<p className="connect-descr">
							Просмотрите все важные ссылки, чтобы улучшить ваше впечатление от
							конференции. От регистрации до предложений по проведению сессий -
							все, что вам нужно, находится всего в одном клике от вас.
							Оставайтесь информированными и вовлеченными с помощью наших
							всеобъемлющих ресурсов.
						</p>
					</div>
					<div className="options">
						<div className="option">
							<img className="option-img" src={schedule} alt="Расписание" />
							<h4 className="option-title">
								Быстрый доступ к регистрации и многое другое
							</h4>
							<p className="option-text">
								Присоединяйтесь к нам и участвуйте в разговоре.
							</p>
						</div>
						<div className="option">
							<img
								className="option-img"
								src={groupPeople}
								alt="Группа людей"
							/>
							<h4 className="option-title">Следите за новостями конференции</h4>
							<p className="option-text">
								Получайте последние обновления и объявления.
							</p>
						</div>
						<div className="option">
							<img
								className="option-img"
								src={presentation}
								alt="Презентация"
							/>
							<h4 className="option-title">
								Пообщайтесь с нашими выдающимися спикерами
							</h4>
							<p className="option-text">
								Познакомьтесь с мнениями лидеров отрасли.
							</p>
						</div>
					</div>
					<RegBtn />
				</div>
			</div>
		</section>
	);
};
