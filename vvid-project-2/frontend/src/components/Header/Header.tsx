import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logos } from '../Logos/Logos';
import './header.pcss';

export const Header: FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/Registration');
    setIsAdmin(prev => !prev);
  };

  const handleAnchorClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  interface Menu {
    text: string;
    href: string;
    isAnchor?: boolean;
  }

  const menuItems: Menu[] = [
    { text: 'Главная', href: '/', isAnchor: false },
    { text: 'Место', href: 'location', isAnchor: true },
    { text: 'Секции', href: 'sections', isAnchor: true },
    { text: 'Даты', href: 'dates', isAnchor: true },
    { text: 'Участнику', href: 'participant', isAnchor: true },
    { text: 'Контактная инф.', href: 'footer', isAnchor: true },
    { text: 'Оргкомитет', href: '/about', isAnchor: false },
    { text: 'Доклады', href: '/Contestant', isAnchor: false },
    { text: 'Админ', href: '/Admin', isAnchor: false },
  ];

  return (
    <header className={'header'}>
      <div className={'header-inner'}>
        <Logos />
        <nav className={'menu'}>
          <ul className={'menu-list'}>
            {menuItems.map(item => (
              <li className={'menu-item'} key={item.text}>
                {item.isAnchor ? (
                  <a
                    href={`#${item.href}`}
                    className={'menu-link'}
                    onClick={handleAnchorClick(item.href)}
                  >
                    {item.text}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className={'menu-link'}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.href);
                    }}
                  >
                    {item.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="reg-btns">
          <button className={'reg-btn'} onClick={handleRegisterClick}>
            <span className={'reg-btn-text'}>Участвовать</span>
          </button>
        </div>
      </div>
    </header>
  );
};