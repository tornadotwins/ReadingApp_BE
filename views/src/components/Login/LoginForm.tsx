import React, { useRef } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { Button, Input } from '../Base';

import {
  StyledLoginForm,
  StyledLoginInput,
  StyledLoginButtonContainer,
} from './styles';
import { LoginFormType } from './types';
import { ERROR_INVALID_PASSWORD, ERROR_INVALID_USERNAME } from '@/config/error-messages';

function LoginForm(props: LoginFormType) {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const focusPassword = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      passwordRef.current?.focus();
    }
  };

  const focusButton = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      buttonRef.current?.click();
    }
  }

  return (
    <StyledLoginForm>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values) => {
          props.onLogIn(values);
        }}
        validationSchema={yup.object().shape({
          username: yup.string().required(ERROR_INVALID_USERNAME),
          password: yup.string().required(ERROR_INVALID_PASSWORD),
        })}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <StyledLoginInput>
              <Input
                label='Username : '
                value={values.username}
                error={touched.username ? errors.username : ''}
                onChange={handleChange('username')}
                onBlur={handleBlur('username')}
                onKeyDown={focusPassword}
                reference={usernameRef}
              />
            </StyledLoginInput>

            <StyledLoginInput>
              <Input
                label='Password : '
                value={values.password}
                type='password'
                error={touched.password ? errors.password : ''}
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
                onKeyDown={focusButton}
                reference={passwordRef}
              />
            </StyledLoginInput>

            <StyledLoginButtonContainer>
              <Button label='Log in' onClick={handleSubmit} reference={buttonRef} />
            </StyledLoginButtonContainer>
          </>
        )}
      </Formik>
    </StyledLoginForm>
  )
}

export default LoginForm;