import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
      flexGrow: 1,
      minHeight: '100vh',
    },
    content: {
      backgroundColor: theme.palette.background.secondary,
    },
    subtitle: {
      padding: theme.spacing(4),
      fontWeight: '600',
      textAlign: 'center',
    },
    products: {
      paddingBottom: theme.spacing(6),
      margin: '0',
    },
  }));