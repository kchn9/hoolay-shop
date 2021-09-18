import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    minHeight: "75vh",
  },
  toolbar: theme.mixins.toolbar,
  title: {
    textAlign: 'center',
    marginTop: '5%',
  },
  link: {
    textDecoration: 'none',
  },
  buttons: {
    display: 'flex',
    marginTop: '5%',
    justifyContent: 'flex-end',
    "& > *": {
      margin: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        width: 140,
        fontSize: '.8rem',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
      }
    },
  }
}));