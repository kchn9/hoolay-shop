import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    list: {
        width: '70vw',
    },
    catLink: {
        textDecoration: 'underline',
        textDecorationColor: 'rgba(255, 255, 255, 0.3)',
        textUnderlineOffset: '2px',
        color: theme.palette.text.primary,
        padding: '0 auto',
        fontSize: '1.2rem',
    },
    subheader: {
        color: theme.palette.grey[800],
    },
    foot: {
        position: 'absolute',
        bottom: '0',
        width: "100%",
        paddingRight: theme.spacing(1),
        opacity: 0.8
    },
    title: {
        color: theme.palette.grey[800],
        padding: theme.spacing(2)
    },
}));