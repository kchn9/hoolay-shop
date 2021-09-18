import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 1),
  },
  avatarSize: {
    height: 'auto',
    width: '10vw',
    aspectRatio: '9 / 16',
    objectFit: 'fill',
    borderRadius: '0',
    '& > img': {
      objectFit: 'cover'
    }
  },
  text: {
    minWidth: '0',
    position: 'relative',
    bottom: '10px',
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(4),
    }
  },
  nameText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingRight: '75px',
    fontSize: '1.8rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      letterSpacing: '-1px',
    }
  },
  priceText: {
    fontSize: '1rem',
    opacity: 0.9,
    [theme.breakpoints.down('xs')]: {
      fontSize: '.9rem',
      opacity: 0.7,
    }
  },
  actions: {
    minWidth: 'fit-content',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityActions: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    }
  },
  quantity: {
    textAlign: 'center'
  }
}));