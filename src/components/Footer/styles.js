import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        position: 'relative',
        bottom: 0,
        margin: '100px auto 75`px auto',
        backgroundColor: theme.palette.grey[800],

    },
    link: {
        textDecoration: 'underline',
        textDecorationColor: 'rgba(255, 255, 255, 0.3)',
        textUnderlineOffset: '2px',
        color: theme.palette.primary.contrastText,
    },
    footbar: {
        position: 'relative',
        top: '10px',
        width: "90%",
        backgroundColor: theme.palette.grey[900],
    },
    copyright: {
        color: theme.palette.primary.contrastText,
    },
    left: {
        flexGrow: 1,
        minWidth: 50,
        textAlign: "left",
        marginLeft: '50px'
    },
    right: {
        flexGrow: 1,
        marginRight: '50px'
    }
}));