import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';

import {
  StyledLoginBoxContainer,
} from './styles';
import { LoginBoxType, LoginValues } from './types';

function LoginBox(props: LoginBoxType) {
  const handleFormSubmit = (values: LoginValues) => {
    props.onLogIn(values.username, values.password);
  };

  return (
    <StyledLoginBoxContainer>
      <LoginHeader />

      <LoginForm onLogIn={handleFormSubmit} />
    </StyledLoginBoxContainer>
  )
}

export default LoginBox;
