import React from 'react';
import Grid from '@material-ui/core/Grid';
import styler from './Footer.module.css'


const Footer = () => {
  return (
    <Grid
          item
          xs={12}
          sm={12}
          container
          justify='space-between'
          alignItems='center'
          style={{padding: "20px"}}
        >
          <Grid item xs={12} sm={4}>
            <div>
              {/* <img
                style={{ height: '40px' }}
                src='https://www.deepalert.ai/wp-content/uploads/2021/01/Deep-Alert-Logo-No-Tag-Line.png'
                alt=''
              /> */}
          <h2 className={styler.footer__title}>Acme Bank</h2>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h4
                style={{
                  textAlign: 'center',
                  marginBottom: '10px',
                  color: '#9e9e9e',
                }}
              >
                Legal Copyright &copy; Acme Bank {new Date().getFullYear()}
              </h4>
              <p
                style={{
                  textAlign: 'center',
                  background: '#ccc',
                  fontWeight: 'bolder',
                  borderRadius: 5,
                  paddingLeft: '6px',
                  paddingRight: '5px',
                }}
              >
                2.8.0
              </p>
              <p></p>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div></div>
          </Grid>
        </Grid>
  );
};

export default Footer;
