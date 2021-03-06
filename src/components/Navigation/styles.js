import { makeStyles, alpha } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    title: {
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        padding: theme.spacing(1),
        color: theme.palette.text.primary,
    },
    image: {
        marginRight: '10px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    buttons: {
        display: 'flex',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(2),
            width: 'auto',
            display: 'block',
        },
        display: 'none',
        margin: theme.spacing(0, 5),
    },
    categories: {
        listStyle: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    catLink: {
        textDecoration: 'underline',
        textDecorationColor: 'rgba(255, 255, 255, 0.3)',
        textUnderlineOffset: '2px',
        color: theme.palette.text.primary,
        margin: theme.spacing(0, 2),
        [theme.breakpoints.up('lg')]: {
            margin: theme.spacing(0, 4),
        },
        fontSize: '1.1rem',
        transition: 'color 100ms, text-decoration 200ms, ease-in',
        '&:hover': {
            color: theme.palette.secondary.main,
            textDecorationColor: theme.palette.secondary.main,
        },
    },
    searchIcon: {
        padding: theme.spacing(2),
        color: theme.palette.secondary.main,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '14ch',
        '&:focus': {
            width: '18ch',
        },
        [theme.breakpoints.up('lg')]: {
            width: '16ch',
            '&:focus': {
                width: '28ch',
            },
        },
    },
}));