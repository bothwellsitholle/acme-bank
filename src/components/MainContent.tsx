import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import MenuPaperCard from './MenuPaperCard';
// import profileicon from '../images/profile-icon_215px.png';
// import routericon from '../images/router2.png';
// import homeicon from '../images/home.png';
// import controlicon from '../images/control-icon.png';
import Footer from './layout/Footer';
import Welcome from './Welcome';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 20,
      marginLeft: 30,
      marginRight: 20,
      overflowX: 'hidden',
    },
    header: {
      height: '160px',
      alignSelf: 'center',
      marginLeft: '40px',
      marginBottom: 50,
      backgroundImage: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 64%)',
      boxShadow: '0 4px 20px rgba(41, 182, 246, 0.3)',
    },
  })
);

const MainContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12} sm={12}>
          <Welcome title='Online Banking' body='Hi Bothwell' />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MenuPaperCard
            path='/account'
            title='my account'
            imgUrl={'https://img.icons8.com/material-sharp/96/fa314a/user.png'}
            btnText='view'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MenuPaperCard
            path='/withdraw'
            title='withdraw'
            imgUrl={
              'https://img.icons8.com/material-sharp/96/fa314a/card-in-use.png'
            }
            btnText='view'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MenuPaperCard
            path='/settings'
            title='settings'
            imgUrl={
              'https://img.icons8.com/material-sharp/96/fa314a/vertical-settings-mixer.png'
            }
            btnText='manage'
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          {/* <br/> */}
        </Grid>
        <Grid item xs={12} sm={4}>
          <MenuPaperCard
            path='mailto:support@acmebank.co.za'
            title='inquiries'
            imgUrl={
              'https://img.icons8.com/material-sharp/96/fa314a/mail-account.png'
            }
            btnText='inquire'
            web={true}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider style={{ marginTop: '50px' }} variant='middle' />
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
};

export default MainContent;
