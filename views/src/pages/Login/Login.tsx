import Header from '@/components/Header';
import Meta from '@/components/Meta';
import { HEADER_TRANSLATION_PORTAL } from '@/config/messages';
import useOrientation from '@/hooks/useOrientation';
import { useNavigate } from 'react-router-dom';

import { StyledLoginContainer, StyledLoginBody } from './styles';
import LoginBox from '@/components/Login';

import authService from '../../../services/auth.services';

function Login() {
  const isPortrait = useOrientation();
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    console.log('clicked login in Login page');
    authService.login({ username, password });
    navigate('/admin/admin-portal');
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
    </>
  );
}

export default Login;
