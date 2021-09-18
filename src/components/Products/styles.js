import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    backgroundColor: theme.palette.background.secondary,
    minHeight: "90vh",
  },
  content: {
    margin: '0',
    overflow: 'hidden',
    padding: theme.spacing(2, 5),
    maxWidth: '100%',
  },
  hr: {
    margin: theme.spacing(0, 10),
    opacity: 0.2,
    backgroundColor: "#0f0f0f",
    [theme.breakpoints.down("xs")]: {
      width: '50%',
      margin: '0 auto',
    }
  },
  text: {
    padding: theme.spacing(4, 0, 1, 10),
    opacity: 0.5,
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2, 0, 1, 0),
      width: '100%',
      textAlign: 'center',
      fontSize: '0.9rem'
    }
  },
  progress: {
    margin: '0 auto',
    marginTop: theme.spacing(5),
  }
}));