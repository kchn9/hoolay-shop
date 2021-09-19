import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    backgroundColor: theme.palette.background.secondary,
    minHeight: "90vh",
  }
}));