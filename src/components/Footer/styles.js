import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        position: 'relative',
        bottom: 0,
        margin: '100px 40px',
        backgroundColor: theme.palette.grey[800],
    },
    grid: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    link: {
        textDecoration: 'underline',
        textDecorationColor: 'rgba(255, 255, 255, 0.3)',
        textUnderlineOffset: '2px',
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
        }
    },
    footbar: {
        position: 'relative',
        top: '10px',
        width: "90%",
        backgroundColor: theme.palette.grey[900],
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    copyright: {
        color: theme.palette.grey[700],
    },
    left: {
        flexGrow: 1,
        minWidth: 50,
        textAlign: "left",
        marginLeft: '50px',
        [theme.breakpoints.down('xs')]: {
            margin: 0,
        }
    },
    right: {
        flexGrow: 1,
        marginRight: '50px',
        [theme.breakpoints.down('xs')]: {
            margin: 0,
        }
    }
}));