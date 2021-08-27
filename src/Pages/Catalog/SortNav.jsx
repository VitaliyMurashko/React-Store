import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const SortNav = (props) => {
  const classes = useStyles();
  return (
    <div style={{ borderBottom: '1px solid black' }}>
      <strong>Цены: </strong>
      <Button className={classes.button} onClick={() => props.sortLowPrice()}>по возрастанию</Button>
      <Button className={classes.button} onClick={() => props.sortHighPrice()}>по убыванию</Button>
      <Button className={classes.button} onClick={() => props.sortDiscount()}>cо c скидкой</Button>
    </div>
  )
}

export default SortNav