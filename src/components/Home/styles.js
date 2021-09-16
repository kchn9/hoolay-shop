import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
      flexGrow: 1,
    },
    content: {
      backgroundColor: theme.palette.background.secondary,
    },
    subtitle: {
      padding: theme.spacing(4),
      color: theme.palette.text.secondary,
      fontWeight: '600',
    },
    products: {
      paddingBottom: theme.spacing(6),
      margin: '0',
    },
  }));