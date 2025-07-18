import { FC, useContext } from 'react';

import RegBtn from '../Btns/RegBtn/RegBtn';

import { ConferenceContext } from '@/providers/ConferenceData';

import conf from '@/assets/images/conf.png';
import logo from '@/assets/images/logo.svg';

import './conf.pcss';

export const Conf: FC = () => {
	const { confDataManager } = useContext(ConferenceContext)!;

	return (
		<section className="conf">
			<div className="conf-inner">
				<div className="conf-info">
					<img className="conf-icon" src={logo} alt="Иконка Конференции" />
					<h4 className="conf-title">{confDataManager.getState().title}</h4>
					<p className="conf-descr">{confDataManager.getState().description}</p>
					<RegBtn />
				</div>
				<img className="conf-img" src={conf} alt="Конференция" />
			</div>
		</section>
	);
};
