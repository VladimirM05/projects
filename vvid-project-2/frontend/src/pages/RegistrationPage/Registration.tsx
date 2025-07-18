import { FC, Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegForm } from '../../components/RegForm/RegForm';

interface IRegistration {
  userSignIn: boolean;
  setUserSignIn: Dispatch<SetStateAction<boolean>>;
}

const Registration: FC<IRegistration> = ({ userSignIn, setUserSignIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setUserSignIn(true);
      navigate('/');
    }
  }, [navigate, setUserSignIn]);

  return <RegForm userSignIn={userSignIn} setUserSignIn={setUserSignIn} />;
};

export default Registration;