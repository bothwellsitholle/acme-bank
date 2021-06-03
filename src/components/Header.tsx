import React, { useContext } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import menuround from '../images/menu.png';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import SettingsPowerRoundedIcon from '@material-ui/icons/SettingsPowerRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import styler from './Header.module.css';
import AuthContext from '../store/AuthContext';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 280;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginTop: '60px',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundImage: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      background: '#f9f9f9',
      // height: '100vh',
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logoutHandler = () => {
    authCtx.logout('');
    setOpen(false);
  };

  const homeClickHandler = () => {
    console.log('home clicked');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    history.push('/');
    setOpen(false);
  };

  const settingsClickHandler = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    history.push('/settings');
    setOpen(false);
  };

  const withdrawClickHandler = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    history.push('/withdraw');
    setOpen(false);
  };

  const accountClickHandler = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    history.push('/account');
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ color: 'white' }}
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {isLoggedIn && (
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <img src={menuround} style={{ height: 27 }} alt='flight' />
            </IconButton>
          )}
          <h2 onClick={homeClickHandler} className={styler.head__title}>Acme Bank</h2>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon style={{ color: '#d62222' }} />
            ) : (
              <ChevronRightIcon style={{ color: '#d62222' }} />
            )}
          </IconButton>
        </div>
        <List>
          <ListItem button key={123} onClick={homeClickHandler}>
            <ListItemIcon>
              <HomeRoundedIcon style={{ color: '#d62222' }} />
            </ListItemIcon>
            <ListItemText
              primary={'home'}
              style={{ color: '#d62222', fontWeight: 'bold' }}
            />
          </ListItem>
          <ListItem button key={1235} onClick={accountClickHandler}>
            <ListItemIcon>
              <AccountCircleRoundedIcon style={{ color: '#d62222' }} />
            </ListItemIcon>
            <ListItemText primary={'my account'} style={{ color: '#d62222' }} />
          </ListItem>
          <ListItem button key={1236} onClick={withdrawClickHandler}>
            <ListItemIcon>
              <AccountTreeRoundedIcon style={{ color: '#d62222' }} />
            </ListItemIcon>
            <ListItemText
              primary={'withdraw'}
              style={{ color: '#d62222' }}
            />
          </ListItem>
          <ListItem button key={1235671} onClick={settingsClickHandler}>
            <ListItemIcon>
              <SettingsIcon style={{ color: '#d62222' }} />
            </ListItemIcon>
            <ListItemText primary={'settings'} style={{ color: '#d62222' }} />
          </ListItem>
        </List>
        <Divider  variant="middle"/>
        <List>
          <ListItem button key={12369} onClick={logoutHandler}>
            <ListItemIcon>
              <SettingsPowerRoundedIcon style={{ color: '#d62222' }} />
            </ListItemIcon>
            <ListItemText primary={'logout'} style={{ color: '#d62222' }} />
          </ListItem>
        </List>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={styler.drawerHeader} />
      </main>
    </div>
  );
};

export default Header;
