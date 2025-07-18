import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '@/assets/images/arrow.svg';
import './reg-btn.pcss';

const RegBtn: FC = () => {
	return (
		<div className={"btns-container"}>
			<a className={"reg-btn"} href="information-letter.pdf" target={'_blank'} rel={'noopener noreferrer'}>
				<span className={"reg-btn-text"}>Информационное письмо</span>
			</a>
			<NavLink className={"more-btn"} to={'/registration'}>
				<span className={"more-btn-text"}>Участвовать</span>
				<img
					className={"more-btn-img"}
					src={arrow}
					alt={"Иконка узнать подробнее"}
				/>
			</NavLink>
		</div>
	);
};

export default RegBtn;
