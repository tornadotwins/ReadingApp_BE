import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header';
import Meta from '@/components/Meta';
import { HEADER_TRANSLATION_PORTAL } from '@/config/messages';
import useOrientation from '@/hooks/useOrientation';

import { StyledLoginContainer, StyledLoginBody } from './styles';
import LoginBox from '@/components/Login';

import authService from '../../../services/auth.services';
import { LoadingOverlay } from '@/components/Base';
import { UserType } from '../types';

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const isPortrait = useOrientation();
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    setIsLoading(true);
    authService
      .login({ username, password })
      .then((user: UserType) => {
        if (user.isAdmin)
          navigate('/admin/admin-portal');
      })
      .catch((error) => {
        toast.error(error, {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false,
          autoClose: 3000
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <Meta title="Login" />
      <StyledLoginContainer flexDirection={isPortrait ? 'column' : 'row'}>
        <Header
          header={HEADER_TRANSLATION_PORTAL}
          isLoggedIn={false}
        />
        <StyledLoginBody>
          <LoginBox onLogIn={handleLogin} />
        </StyledLoginBody>
      </StyledLoginContainer>

      <ToastContainer />
      {isLoading && <LoadingOverlay />}
    </>
  );
}

export default Login;
