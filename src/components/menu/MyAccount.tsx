import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Welcome from '../Welcome';
import Footer from '../layout/Footer';
import styler from './MyAccount.module.css';


const MyAccount = () => {
  return (
    <div className={styler.account__container}>
      <Welcome title='Your account' body='Next payment date: 1 July 2021' />
      <div className={styler.account__wrapper}>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={12} sm={12}>
            <h2 className={styler.headtitle}>personal details</h2>
            <Divider
              style={{ color: 'blue', margin: '20px', marginLeft: '0px' }}
            />
            <p>
              Full Name : <span> Bothwell Sithole</span>
            </p>
            <p>
              Email : <span> bothwellsithole2@gmail.com</span>
            </p>
            <p>
              Phone : <span> +27794001673</span>
            </p>
            <p>
              ID : <span> DN913449</span>
            </p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <h2 className={styler.headtitle} style={{ marginTop: '50px' }}>
            Insurance payment date
            </h2>
            <Divider
              style={{ color: 'blue', margin: '20px', marginLeft: '0px' }}
            />
            <p>
              Your current payment date is set to the{' '}
              <span> 1st of every month.</span> You can change the date to one
              that suits you better
            </p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <h2 className={styler.headtitle} style={{ marginTop: '50px' }}>
              payment method
            </h2>
            <Divider
              style={{ color: 'blue', margin: '20px', marginLeft: '0px' }}
            />
            <p>
              Card: <span> MASTER</span>
            </p>
            <p>
              Account holder : <span> bothwell sithole</span>
            </p>
            <p>
              Card number : <span>XXXXX-XX-XXXX-6388</span>
            </p>
            <p>
              Expiry date : <span>01/2024</span>
            </p>
          </Grid>
          <Grid item xs={12} sm={12}>
            <a href='mailto:support@deepalert.ai'>Contact Support</a>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Divider style={{ marginTop: '50px' }} variant='middle' />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
