import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        position: 'relative',
        height: '500px',
        margin: 0,
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        filter: 'grayscale(90%)',
        objectPosition: '50% 20%',
        objectFit: 'cover',
        transition: 'opacity 1s ease-in',
    },
    caption: {
        position: 'absolute',
        bottom: '50%',
        width: '100%',
        zIndex: 2,
        fontSize: '3rem',
        color: theme.palette.primary.main,
        transform: 'translateY(50%)',
        backgroundColor: '#0f0f0f50',
        opacity: 0.8,
        textShadow: '#f0f0f0 1px 1px 1px',
        textAlign: 'center',
        '&::before': {
            content: "''",
            position: "absolute",
            left: "50%",
            bottom: "22px",
            width: "50%",
            height: "8px",
            transform: "skew(-30deg) translateX(-50%)",
            background: "rgba(248,188,36,0.8)",
            zIndex: -1,
        },
        '&::after': {
            content: "'Oficialny sklep'",
            position: "absolute",
            fontSize: "1.5rem",
            bottom: "-20%",
            left: "50%",
            transform: 'translateX(-50%)',
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.2rem",
                bottom: "-15%",
            }
        }
    },
    shown: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    }
}))