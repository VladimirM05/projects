import { useState, useEffect, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

import { Footer } from '../Footer/Footer';

import dron3 from '@/assets/images/dron-3.png';

import './application.pcss';

interface ApplicationProps {
	sectionIds: string[];
	scrollToSection: (id: string) => void;
}

interface UserData {
	fio: string;
	mail: string;
	num: string;
	org: string;
}

interface FormData {
	name: keyof UserData;
	text: string;
	ph: string;
}

const formData: FormData[] = [
	{
		name: 'fio',
		text: 'ФИО',
		ph: 'Ваше ФИО',
	},
	{
		name: 'mail',
		text: 'Email',
		ph: 'example@example.com',
	},
	{
		name: 'num',
		text: 'Телефон',
		ph: '+7 (999) 999-99-99',
	},
	{
		name: 'org',
		text: 'Название вашей организации',
		ph: 'Организация',
	},
];

export const Application = forwardRef<HTMLElement, ApplicationProps>(
	({ sectionIds, scrollToSection }, ref) => {
		const [userData, setUserData] = useState<UserData>({
			fio: '',
			mail: '',
			num: '',
			org: '',
		});
		const [btnText, setBtnText] = useState<string>('ОТПРАВИТЬ');

		useEffect(() => {
			setUserData({
				fio: '',
				mail: '',
				num: '',
				org: '',
			});
		}, [btnText]);

		const handleFormBtn = (): void => {
			const { fio, mail, num, org } = userData;
			if ([fio, mail, num, org].every(field => field.trim() !== '')) {
				setBtnText('ВАША ЗАЯВКА ОТПРАВЛЕНА');
			} else {
				return;
			}

			const formBtn: HTMLButtonElement | null = document.querySelector(
				'.application-form-btn'
			);
			const formInput: NodeListOf<HTMLInputElement> = document.querySelectorAll(
				'.application-form-input'
			);

			if (formBtn && formInput) {
				formBtn.disabled = true;
				for (let i = 0; i <= formInput.length - 1; i++) {
					formInput[i].disabled = true;
				}
				formBtn.style.cursor = 'default';
			}
		};

		return (
			<div className={'application-wrapper'}>
				<section className={'application section'} ref={ref}>
					<div className={'container'}>
						<div className={'application-inner'}>
							<div className={'application-container'}>
								<div className={'application-descr'}>
									<h2 className={'application-title'}>
										ЗАЯВКА НА ПРИОБРЕТЕНИЕ ЛИЦЕНЗИИ
									</h2>
									<p className={'application-text'}>
										Заполните небольшую форму, мы свяжемся с вами по указанным
										контактным данным и обсудим лучшие варианты приобретения
										симулятора «НЕБО-ЗЕМЛЯ»
									</p>
								</div>
								<img className={'application-img'} src={dron3} alt={'Дрон'} />
							</div>
							<form className={'application-form'}>
								{formData.map(item => (
									<div className={'application-form-group'} key={item.text}>
										<label className={'application-form-title'}>
											{item.text}
										</label>
										<input
											type={'text'}
											className={'application-form-input'}
											placeholder={item.ph}
											value={userData[item.name] || ''}
											onChange={e => {
												setUserData(prev => ({
													...prev,
													[item.name]: e.target.value,
												}));
											}}
											required
										/>
									</div>
								))}
								<button
									className={'application-form-group application-form-btn'}
									onClick={handleFormBtn}
									type="submit"
								>
									{btnText}
								</button>
								<p className={'application-form-group application-form-policy'}>
									Отправляя заявку вы соглашаетесь с
									<NavLink
										to={'/'}
										className="application-form-policy-link"
										rel={'noopener noreferrer'}
									>
										политикой конфиденциальности
									</NavLink>
								</p>
							</form>
						</div>
					</div>
				</section>
				<Footer sectionIds={sectionIds} onScroll={scrollToSection} />
			</div>
		);
	}
);

Application.displayName = 'Application';
