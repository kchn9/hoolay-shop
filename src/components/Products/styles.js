import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    backgroundColor: theme.palette.background.secondary,
    minHeight: "75vh",
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
    backgroundColor: theme.palette.text.secondary,
  },
  categoryName: {
    padding: theme.spacing(4, 0, 1, 10),
    opacity: 0.5,
  }
}));