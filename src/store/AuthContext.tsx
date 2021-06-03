import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (token: string) => {},
  logout: (token: string) => {},
  token: '',
  balance: 0,
  withdraw: (amount: number) => {},
});

interface CtxStateType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  token: string;
  balance: number;
  withdraw: (amount: number) => void;
}

export const AuthContextProvider: React.FC = ({ children }) => {
  const initialToken = localStorage.getItem('token');
  const initialBalance = localStorage.getItem('balance');
  const [token, setToken] = useState<string>(initialToken ? initialToken : '');
  const [balance, setBalance] = useState<number>(
    initialBalance ? +initialBalance : 0
  );
  const isLoggedin = !!token;

  const loginHandler = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
  };
  const logoutHandler = () => {
    setToken('');
    localStorage.clear();
  };
  const withdraw = (amount: number): void => {
    setBalance((prev) => +-amount);
  };
  const ctxState: CtxStateType = {
    isLoggedIn: isLoggedin,
    login: loginHandler,
    logout: logoutHandler,
    token: token,
    balance,
    withdraw,
  };
  return (
    <AuthContext.Provider value={ctxState}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
