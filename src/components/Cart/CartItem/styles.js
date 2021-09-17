import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 1),
  },
  avatarSize: {
    width: '75px',
    height: '75px',
  },
  text: {
    position: 'relative',
    bottom: '10px',
    margin: 0,
  },
  nameText: {
    fontSize: '1.8rem',
  },
  priceText: {
    fontSize: '1rem',
    opacity: 0.9,
  },
  quantity: {
    textAlign: 'center'
  }
}));