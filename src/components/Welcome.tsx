import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styler from './Welcome.module.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      height: '400px',
      width: '90%',
      minWidth: '420px',
      borderRadius: 15,
      boxShadow: '0 3px 14px rgba(1,1,1,0.3)',
    },
    header: {
      height: '160px',
      alignSelf: 'center',
      marginLeft: '40px',
      marginBottom: 30,
      backgroundImage: 'linear-gradient(to right, #a40606 0%, #c81f70 74%)',
      boxShadow: '0 4px 20px rgba(236, 64, 122, 0.5)',
    },
  })
);

interface WecomeType {
  title: string;
  body: string;
}

// Component renders welcome messages - It has been reused.
const Welcome: React.FC<WecomeType> = ({ title, body }) => {
  const classes = useStyles();
  return (
    <Paper
      className={`${classes.paper} ${classes.header} ${styler.welcome__wrapper}`}
      elevation={3}
    >
      <h2>{title}</h2>
      <div>
        <p>{body}</p>
        <div>
          <p>
            {new Date().toLocaleDateString()} &nbsp; &nbsp; - 13
            <span>&#176;</span>C &nbsp;&nbsp;&nbsp;
          </p>
        </div>
      </div>
    </Paper>
  );
};

export default Welcome;
