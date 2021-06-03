import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Welcome from '../Welcome';
import Footer from '../layout/Footer';
import styler from './MyHub.module.css';
import routericon from '../../images/router2.png';
import surficon from '../../images/gif.gif';

const MyHub = () => {
  return (
    <Grid container spacing={3} alignItems='center'>
      <Grid item xs={12} sm={12}>
        <div className={styler.welcome}>
          <Welcome title='5g Hub Network' body='Your Hub Info' />
        </div>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Paper className={styler.myHub__card} elevation={3}>
          <div className={styler.myHub__paperConteiner}>
            <img className={styler.surf__image} src={routericon} alt='router' />
            <div className={styler.myHub__content}>
              <h2>Hub Connection</h2>
              <p>
                my plan: <span> Hub Pro x24 months</span>
              </p>
              <Divider
                style={{ color: 'blue', margin: '20px', marginLeft: '0px' }}
              />
              <p>
                etho IP : <span> 192.168.42.1/24,</span>
              </p>
              <p>
                wlan0 IP : <span>192.168.42.1/24</span>
              </p>
              <p>
                tun2 IP : <span>10.53.0.6/32</span>
              </p>
              <p>
                messaging status :
                <span style={{ fontSize: '18px', color: 'green' }}>ok</span>
              </p>
              <p>
                vpn connection :
                <span className={styler.connect}> {/* connected */}</span>
              </p>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={styler.myHub__card} elevation={3}>
          <img className={styler.elite__image} src={surficon} alt='' />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={styler.myHub__card} elevation={3}>
          <h2 className={styler.headtitle} style={{ marginTop: '10px' }}>
            Bothwell's payment method
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
          <h2 className={styler.headtitle} style={{ marginTop: '20px' }}>
            Contact Details
          </h2>
          <Divider
            style={{ color: 'blue', margin: '20px', marginLeft: '0px' }}
          />
          <p>
            Address: <span> 11 Morningside, Sandton</span>
          </p>
          <p>
            Phone Number : <span> 0794001673</span>
          </p>
          <p>
            Email : <span> bothwellsithole2@gmail.com</span>
          </p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider style={{ marginTop: '50px' }} variant='middle' />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default MyHub;
