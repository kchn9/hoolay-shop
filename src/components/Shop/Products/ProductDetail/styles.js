import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5, 3),
        minHeight: '80vh',
    },
    top: {
        width: '100%',
    },
    topWrapper: {
        flexWrap: 'nowrap',
        [theme.breakpoints.down("xl")]: {
            height: '60vh',
        },
        [theme.breakpoints.down("lg")]: {
            height: '53vh',
        },
        [theme.breakpoints.down("md")]: {
            height: '42vh',
        },
        [theme.breakpoints.down(740)]: {
            height: '38vh',
        },
        [theme.breakpoints.down("xs")]: {
            flexDirection: 'column',
            height: 'unset',
        }
    },
    gallery: {
        height: '100%',
        [theme.breakpoints.down("xs")]: {
            padding: '8px !important',
        }
    },
    content: {
        flexGrow: 1,
        flexBasis: '50%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    name: {
        padding: theme.spacing(0, 2, 1, 2),
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.5rem'
        }
    },
    price: {
        padding: theme.spacing(1),
        fontSize: '1.3rem'
    },
    hr: {
        opacity: 0.5,
        backgroundColor: "#0f0f0f",
        width: '100%',
        marign: 0,
    },
    buttons: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        position: "absolute",
        width: '100%',
        bottom: `${theme.spacing(3)}px`,
        "& > button": {
            width: '90%',
            margin: `${theme.spacing(1)}px 0`,
        },
        [theme.breakpoints.down("xs")]: {
            position: 'relative',
            paddingTop: '7%',
        }
    },
}));