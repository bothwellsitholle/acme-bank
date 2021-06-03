import React, { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import classes from './Login.module.css';
import Alert from '@material-ui/lab/Alert';
import LoadingSpinner from '../layout/LoadingSpinner';

interface signInType {
  message: string;
  token: string;
  status: boolean;
}

const Login = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const [errMessage, setErrMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const authCtx = useContext(AuthContext);

  const users = [
    {
      id: '1a',
      email: '123@test.com',
      password: '123456',
    },
    {
      id: '1b',
      email: 'hub@test.com',
      password: '123456',
    },
    {
      id: '1c',
      email: 'test@test.com',
      password: '123456',
    },
  ];

  const signIn = async (
    email: string | undefined,
    password: string | undefined
  ): Promise<signInType> => {
    return new Promise((resolve, reject) => {
      try {
        const user = users.find((user) => user.email === email);
        if (user) {
          if (user.password === password) {
            return resolve({
              message: 'login successful',
              token: '12dfllfbdhm',
              status: true,
            });
          } 
            resolve({
              message: 'Password is incorrect',
              token: '',
              status: false,
            });
        }
      } catch (err) {
        reject({
          message: 'email is invalid',
          token: null,
          status: false,
        });
      }
    });
  };

  const submitHander = (evt: React.FormEvent<HTMLFormElement> | undefined) => {
    evt?.preventDefault();
    const enteredEmail = emailInput.current?.value;
    const enteredPassword = passwordInput.current?.value;

    setIsLoading(true);

    setTimeout(() => {
      signIn(enteredEmail, enteredPassword)
        .then((response) => {
          setIsLoading(false);
          if (response.status) {
            setErrMessage('');
            authCtx.login(response.token);
            setErrMessage('');
            console.log(response.message);
            console.log(response.token);
          } else {
            setErrMessage(response.message);
            console.log(response.message);
          }
        })
        .catch((err) => {
          setErrMessage(err.message);
          console.log(err.message);
          setIsLoading(false);
        });
    }, 2000);
  };

  return (
    <div className={classes.form__container}>
      <div className={classes.heading}>
        <h2>Sign in</h2>
        {errMessage && (
          <Alert
            severity='error'
            onClose={() => {
              setErrMessage('');
            }}
          >
            {errMessage}
          </Alert>
        )}
      </div>
      <form onSubmit={submitHander} className={classes.form__control}>
        <div className={classes.form__inputs}>
          <label htmlFor='email'>Email</label>
          <input ref={emailInput} type='email' id='email' required />
        </div>
        <div className={classes.form__inputs}>
          <label htmlFor='Password'>Password</label>
          <input ref={passwordInput} type='password' id='password' required />
        </div>
        <div className={classes.form__actions}>
          {isLoading ? (
            // <h4>Please wait...</h4>
            <LoadingSpinner />
          ) : (
            <button type='submit'>Login</button>
          )}
          {!isLoading && <p>Acme Online Banking &reg;</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
