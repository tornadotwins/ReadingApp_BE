import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Bounce, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header';
import Meta from '@/components/Meta';
import { HEADER_TRANSLATION_PORTAL, LOGIN_SUCCESS } from '@/config/messages';
import useOrientation from '@/hooks/useOrientation';

import { StyledLoginContainer, StyledLoginBody } from './styles';
import LoginBox from '@/components/Login';

import authService from '../../../services/auth.services';
import { LoadingOverlay } from '@/components/Base';
import actionTypes from '@/actions/actionTypes';
import { UserType } from '../types';
import { LoginPropsType } from './types';
import { AppStateType } from '@/reducers/types';

function Login(props: LoginPropsType) {
  const [isLoading, setIsLoading] = useState(false);

  const isPortrait = useOrientation();
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    setIsLoading(true);
    authService
      .login({ username, password })
      .then((user: UserType) => {
        props.dispatch({
          type: actionTypes.SET_CURRENT_USER,
          payload: {
            user: user,
          },
        });

        toast.success(LOGIN_SUCCESS, {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false,
          autoClose: 3000
        });

        if (user.isAdmin)
          navigate('/admin');
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

      {isLoading && <LoadingOverlay />}
    </>
  );
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

function mapStateToProps(state: AppStateType) {
  return {
    currentUser: state.user.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
