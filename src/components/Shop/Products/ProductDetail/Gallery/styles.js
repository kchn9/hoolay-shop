import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    fullscreen: {
        position: 'relative',
        height: '80vh',
        overflow: 'hidden',
        aspectRatio: '1 / 1',
    },
    root: {
        position: 'relative',
        height: '100%',
        overflow: 'hidden',
        aspectRatio: '1 / 1',
    },
    image: {
        position: 'absolute',
        height: '100%',
        width: 'inherit',
        left: '50%',
        objectFit: 'contain',
        transform: 'translateX(-50%)',
        transition: 'opacity 200ms ease-in',
    },
    button: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%) scale(1.5)',
        color: 'black',
        opacity: 0.9,
        transition: 'opacity 200ms ease-in',
    },
    left: {
        left: theme.spacing(1),
    },
    right: {
        right: theme.spacing(1),
    },
    shown: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
    disabled: {
        color: 'black !important',
        opacity: 0.2,
    },
    zoomPreview: {
        height: 'inherit',
        width: 'inherit',
        position: 'aboslute',
    }
}));