import React, { useState, useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Welcome from '../Welcome';
import Footer from '../layout/Footer';
import classes from './Withdraw.module.css';
import AuthContext from '../../store/AuthContext';
import Modal from '../UI/Modal';


interface AccountType {
  account_number: string;
  account_type: string;
  balance: string;
}

const Withdraw = () => {
  const [accountsList, setAccountsList] = useState<AccountType[]>([]);
  const ctx = useContext(AuthContext);
  const balance = ctx.balance;
  const [withdrawalAmount, setWithdrawalAmount] = useState<string | number>();
  const [showModal, setShowModal] = useState(false);
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [accountName, setAccountType] = useState<string>();

  useEffect(() => {
    localStorage.removeItem('balance');
    const fetchAccounts = async () => {
      const response = await fetch('http://localhost:8080/api/accounts');

      if (!response.ok) {
        throw new Error('Could not fetch accounts');
      }

      const data = await response.json();
      const totalBalance = data.reduce(
        (accumulator: number, currentValue: AccountType): number => {
          return accumulator + +currentValue.balance;
        },
        0
      );
      localStorage.setItem('balance', totalBalance);
      setAccountsList(data);
    };
    fetchAccounts().catch((err) => console.log(err.message));
  }, []);

  const withdrawAmount = (): void => {
    if (!+withdrawalAmount!) {
      setWithdrawalAmount('');
      alert('Please enter valid amount');
      return;
    }

    if (accountName === 'cheque') {
      if (
        accountBalance < 0 &&
        accountBalance > -500 &&
        accountBalance - +withdrawalAmount! > -500
      ) {
        setWithdrawalAmount('');
        setShowModal(false);
        return alert('success');
      } else if (
        accountBalance > 0 &&
        accountBalance - +withdrawalAmount! > -500
      ) {
        setWithdrawalAmount('');
        setShowModal(false);
        return alert('success');
      } else {
        setWithdrawalAmount('');
        return alert('Not enough balance to perform operation');
      }
    }

    if (accountName === 'savings') {
      if (accountBalance < +withdrawalAmount!) {
        setWithdrawalAmount('');
        return alert('Not enough balance to perform operation');
      }
      setShowModal(false);
      setWithdrawalAmount('');
      return alert('success');
    }

    setWithdrawalAmount('');
    setShowModal((prev) => !prev);
  };

  const withdrawHandler = (accountType: string, balance: number): void => {
    setAccountBalance(balance);
    setAccountType(accountType);
    showDetails();
  };

  const showDetails = () => {
    setShowModal((prev) => !prev);
  };

  const showActiveButton = (accountType: string, balance: string) => {
    if (accountType === 'savings') {
      if (+balance < 0) {
        return true;
      }
    }
    if (accountType === 'cheque') {
      if (+balance < -500) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className={classes.accounts__wrapper}>
      {showModal && (
        <Modal onClose={showDetails}>
          <div className={classes.modal__details}>
            <h2>enter withdrawal amount</h2>
            <input
              value={withdrawalAmount}
              type='number'
              onChange={(e) => setWithdrawalAmount(e.target.value)}
            />
            <button className={classes.withdraw} onClick={withdrawAmount}>
              Withdraw
            </button>
          </div>
        </Modal>
      )}
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12} sm={12}>
          <div>
            <Welcome title='Your Accounts' body='Savings & Cheque' />
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div className={classes.liststores}>
            <table>
              <thead>
                <tr>
                  <th>Account Number</th>
                  <th>Account Type</th>
                  <th>Balance</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {accountsList.map((account) => {
                  return (
                    <tr key={account.account_number}>
                      <td>{account.account_number}</td>
                      <td>{account.account_type}</td>
                      <td>{+account.balance}</td>
                      <td>
                        <button
                          disabled={showActiveButton(
                            account.account_type,
                            account.balance
                          )}
                          className={
                            showActiveButton(
                              account.account_type,
                              account.balance
                            )
                              ? classes.disabled
                              : ''
                          }
                          onClick={(e) => {
                            withdrawHandler(
                              account.account_type,
                              +account.balance
                            );
                          }}
                        >
                          withdraw
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td>
                    <p>
                      <strong>Balance</strong>
                    </p>
                  </td>
                  <td></td>
                  <td>
                    <p>R {balance}</p>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider style={{ marginTop: '50px' }} variant='middle' />
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
};

export default Withdraw;
