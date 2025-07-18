import { FC, useState, Dispatch, SetStateAction, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegForm.pcss';

interface IRegForm {
  userSignIn: boolean;
  setUserSignIn: Dispatch<SetStateAction<boolean>>;
}

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  organization: string;
  participation: string;
  phone: string;
}

export const RegForm: FC<IRegForm> = ({ userSignIn, setUserSignIn }) => {
  const [formData, setFormData] = useState<User>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    middleName: '',
    organization: '',
    participation: 'offline',
    phone: ''
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      try {
        if (userSignIn) {
          const users = JSON.parse(localStorage.getItem('users') || '[]');
          const user = users.find(
            (u: User) => u.email === formData.email && u.password === formData.password
          );
          
          if (!user) {
            throw new Error('Неверный email или пароль');
          }

          localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
          const users = JSON.parse(localStorage.getItem('users') || '[]');

          if (users.some((u: User) => u.email === formData.email)) {
            throw new Error('Пользователь с таким email уже существует');
          }

          const newUser = {
            ...formData,
            middleName: formData.middleName || undefined
          };
          
          localStorage.setItem('users', JSON.stringify([...users, newUser]));
          localStorage.setItem('currentUser', JSON.stringify(newUser));
        }
        
        setUserSignIn(true);
        navigate('/');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Произошла ошибка');
      } finally {
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <section className='reg-form-section'>
      <div className="reg-form-container">
        <form className="reg-form" onSubmit={handleSubmit}>
          <h2 className="reg-form-title">{userSignIn ? 'Вход' : 'Регистрация'}</h2>
          
          {!userSignIn && (
            <>
              <div className="form-row">
                <div className="form-group compact">
                  <label>Фамилия</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group compact">
                  <label>Имя</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group compact">
                  <label>Отчество</label>
                  <input
                    type="text"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group compact">
                  <label>Организация</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group compact">
                  <label>Участие</label>
                  <select
                    name="participation"
                    value={formData.participation}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  >
                    <option value="offline">Очно</option>
                    <option value="online">Онлайн</option>
                  </select>
                </div>
                <div className="form-group compact">
                  <label>Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
            </>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label>Пароль</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
              minLength={6}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Загрузка...' : userSignIn ? 'Войти' : 'Зарегистрироваться'}
          </button>

          <div className="form-footer">
            {userSignIn ? (
              <span>
                Нет аккаунта?{' '}
                <button 
                  type="button" 
                  onClick={() => {
                    setUserSignIn(false);
                    setError('');
                  }}
                  disabled={isLoading}
                >
                  Зарегистрироваться
                </button>
              </span>
            ) : (
              <span>
                Уже есть аккаунт?{' '}
                <button 
                  type="button" 
                  onClick={() => {
                    setUserSignIn(true);
                    setError('');
                  }}
                  disabled={isLoading}
                >
                  Войти
                </button>
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};