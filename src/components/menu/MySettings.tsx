import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Welcome from '../Welcome';
import Footer from '../layout/Footer';
import styler from './MySettings.module.css';
import poweroff from '../../images/pwr.gif';
import reload from '../../images/rld2.png';
import Input from '@material-ui/core/Input';
import Alert from '@material-ui/lab/Alert';
import LoadingSpinner from '../layout/LoadingSpinner';

const MySettings = () => {
  const [isEditingPassword, setIsEditingPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>();
  const [errMessage, setErrMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isPoweroff, setIsPowerOff] = useState(false);
  const [messageDirector, setMessageDirector] = useState(false);
  const [fromReboot, setFromReboot] = useState(false);
  const [fromPowerOff, setFromPowerOff] = useState(false);
  const [fromPasswords, setFromPasswords] = useState(true);

  const editPasswordHandler = () => {
    setIsEditingPassword(true);
  };

  const cancelEditingHandler = () => {
    setIsEditingPassword(false);
  };

  const powerOffHandler = () => {
    setSuccessMessage('');
    setErrMessage('');
    setMessageDirector(false);
    setFromPowerOff(true);
    setFromPasswords(false);
    setTimeout(() => {
      setSuccessMessage('successfully updated status');
      setIsPowerOff((prev) => !prev);
      setFromPowerOff(false);
    }, 3000);
  };

  const rebootHandler = () => {
    setSuccessMessage('');
    setErrMessage('');
    setMessageDirector(true);
    setFromReboot(true);
    setFromPasswords(false);
    if (!isPoweroff) {
      setTimeout(() => {
        setSuccessMessage('Successfully send request');
        setFromReboot(false);
      }, 3000);
    } else {
      setTimeout(() => {
        setErrMessage('Activate account first!');
        setFromReboot(false);
      }, 3000);
    }
  };

  const changePasswordHandler = () => {
    setFromPasswords(true);
    setSuccessMessage('');
    setErrMessage('');

    //Validate
    if (password!.trim().length < 6) {
      return setErrMessage('Password cannot be less than 6 characters');
    }

    setSuccessMessage('You have successfully changed your password');
    setPassword('');
    setIsEditingPassword(false);
  };

  return (
    <Grid container spacing={3} alignItems='center'>
      <Grid item xs={12} sm={12}>
        <Welcome title='Account Settings' body='Hi Bothwell' />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Paper className={styler.myAccount__card} elevation={3}>
          <div className={styler.myAccount__paperContainer}>
            {/* <img src={routericon} alt='router' /> */}
            <div className={styler.myAccount__content}>
              <h2>Update Password</h2>
              <Divider
                variant={'middle'}
                style={{ color: 'blue', margin: '20px', marginLeft: '0px' }}
              />
              {!isEditingPassword && <p>You can change your password:</p>}
              <br />
              {errMessage && fromPasswords && (
                <Alert
                  severity='error'
                  onClose={() => {
                    setErrMessage('');
                  }}
                >
                  {errMessage}
                </Alert>
              )}
              {successMessage && fromPasswords && (
                <Alert
                  onClose={() => {
                    setSuccessMessage('');
                  }}
                >
                  {successMessage}
                </Alert>
              )}
              <br />
              {isEditingPassword && (
                <>
                  <p className={styler.label}>
                    Put your new password: <span></span>
                  </p>
                  <div className={styler.input__container}>
                  <Input
                    value={password}
                    type='password'
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  </div>
                </>
              )}
              <div className={styler.myAccount__buttons}>
                {!isEditingPassword && (
                  <button
                    className={styler.btn__style}
                    onClick={editPasswordHandler}
                  >
                    Change Password
                  </button>
                )}
                {isEditingPassword && (
                  <div className={styler.btn__group}>
                    <button
                      className={styler.btn__style}
                      onClick={cancelEditingHandler}
                    >
                      Cancel
                    </button>
                    <button
                      className={styler.btn__style}
                      onClick={changePasswordHandler}
                    >
                      Confirm
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={styler.myAccount__card} elevation={3}>
          <div className={styler.myAccount__paperContainer}>
            {/* <img src={routericon} alt='router' /> */}
            <div className={styler.myAccount__content}>
              <h2>Report Fraud</h2>
              <Divider
                variant={'middle'}
                style={{ color: 'blue', margin: '20px', marginLeft: '0px' }}
              />
              {successMessage && messageDirector && !fromPasswords && (
                <Alert
                  onClose={() => {
                    setSuccessMessage('');
                  }}
                >
                  {successMessage}
                </Alert>
              )}
              {errMessage && messageDirector && !fromPasswords && (
                <Alert
                  severity='error'
                  onClose={() => {
                    setErrMessage('');
                  }}
                >
                  {errMessage}
                </Alert>
              )}
              <div className={styler.myAccount__buttons}>
                {!fromReboot ? (
                  <img
                    src={reload}
                    alt='reboot'
                    className={styler.action__buttons}
                    onClick={rebootHandler}
                  />
                ) : (
                  <LoadingSpinner />
                )}
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={styler.myAccount__card} elevation={3}>
          <div className={styler.myAccount__paperContainer}>
            {/* <img src={routericon} alt='router' /> */}
            <div className={styler.myAccount__content}>
              {!isPoweroff ? <h2>Deactivate Account</h2> : <h2>Activate account</h2>}
              <Divider
                variant={'middle'}
                style={{ color: 'blue', margin: '20px', marginLeft: '0px' }}
              />
              {successMessage && !messageDirector && (
                <Alert
                  onClose={() => {
                    setSuccessMessage('');
                  }}
                >
                  {successMessage}
                </Alert>
              )}
              <div className={styler.myAccount__buttons}>
                {!fromPowerOff ? (
                  <img
                    src={poweroff}
                    alt='poweroff'
                    className={styler.action__buttons}
                    onClick={powerOffHandler}
                  />
                ) : (
                  <LoadingSpinner />
                )}
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider style={{ marginTop: '50px' }} variant='middle' />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default MySettings;
