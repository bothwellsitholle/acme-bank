import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styler from './MenuPaperCard.module.css';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      // textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '400px',
      width: '90%',
      borderRadius: 15,
      boxShadow: '0 3px 14px rgba(1,1,1,0.3)',
    },
  })
);

interface PaperCard {
  path: string;
  title: string;
  imgUrl: string;
  btnText: string;
  web?: boolean;
}

const MenuPaperCard: React.FC<PaperCard> = ({
  path,
  title,
  imgUrl,
  btnText,
  web,
}) => {
  const classes = useStyles();
  const history = useHistory();

  // Changes screens depending on route
  const screenChanger = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    history.push(path);
  };
  return (
    <Paper className={`${classes.paper} ${styler.paper}`} elevation={0}>
      <h2>{title}</h2>
      <img src={imgUrl} alt='hub__image' />
      <div>
        {!web ? (
          <button onClick={screenChanger}>{btnText}</button>
        ) : (
          <a href={path}>{btnText}</a>
        )}
      </div>
    </Paper>
  );
};

export default MenuPaperCard;
