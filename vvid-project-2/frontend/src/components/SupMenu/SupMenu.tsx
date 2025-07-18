import { FC, useState } from 'react';
import "./SupMenu.pcss"
import arrow from '@/assets/images/arrow.svg';

export const SupMenu: FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
    const toggleMenu = () => {
		const menuBtnImg = document.querySelector('.menu-btn-img') as HTMLElement;

		if (!isMenuVisible) {
			menuBtnImg.style.transform = 'rotate(-90deg)';
		} else {
			menuBtnImg.style.transform = 'rotate(90deg)';
		}
		setIsMenuVisible(prev => !prev);
	};
    return(
        <li className={'menu-item'}>
			<button className={'menu-btn'} onClick={toggleMenu}>
				<span className="menu-btn-text">Ещё</span>
					<img
						className={'menu-btn-img'}
							src={arrow}
							alt={'Раскрыть список'}
					/>
			</button>
		</li>
    );
}