import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer } from '../Footer/Footer';

import regBg from '@/assets/images/preview.png';
import dron from '@/assets/images/dron-4.png';

import './reg-form.pcss';

interface RegProps {
	sectionIds: string[];
	scrollToSection: (id: string) => void;
}

interface RegUserData {
	login: string;
	password: string;
}

interface RegData {
	name: keyof RegUserData;
	text: string;
}

const regData: RegData[] = [
	{
		name: 'login',
		text: 'Логин',
	},
	{
		name: 'password',
		text: 'Пароль',
	},
];

export const RegForm: FC<RegProps> = ({ sectionIds, scrollToSection }) => {
	const [regUserData, setRegUserData] = useState<RegUserData>({
		login: '',
		password: '',
	});
	const navigate = useNavigate();

	const goMain = (): void => {
		const { login, password } = regUserData;
		[login, password].every(field => field.trim() !== '') && navigate('/');
	};

	return (
		<div className="reg-wrapper">
			<section
				className={'reg section'}
				style={{ backgroundImage: `url(${regBg})` }}
			>
				<div className={'container'}>
					<div className={'reg-inner'}>
						<div className={'reg-container'}>
							<h2 className={'reg-title'}>АВТОРИЗАЦИЯ</h2>
							<form className={'reg-form'}>
								{regData.map(item => (
									<div className={'reg-form-group'} key={item.text}>
										<label className={'reg-form-title'}>{item.text}</label>
										<input
											type={'text'}
											className={'reg-form-input'}
											placeholder={item.text}
											value={regUserData[item.name] || ''}
											onChange={e => {
												setRegUserData(prev => ({
													...prev,
													[item.name]: e.target.value,
												}));
											}}
											required
										/>
									</div>
								))}
								<button
									className={'reg-form-group reg-form-btn'}
									type={'submit'}
									onClick={goMain}
								>
									ВОЙТИ
								</button>
							</form>
						</div>
						<img className={'reg-img'} src={dron} alt={'Дрон'} />
					</div>
				</div>
			</section>
			<Footer sectionIds={sectionIds} onScroll={scrollToSection} />
		</div>
	);
};
