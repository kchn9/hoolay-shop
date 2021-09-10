import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    content: {
        position: 'relative',
        marginBottom: 0,
    },
    image: {
        position: 'relative',
        height: '100%',
        width: '100%',
        filter: 'grayscale(88%)',
    },
    caption: {
        position: 'absolute',
        top: "35%",
        left: "10%",
        zIndex: 2,
        fontSize: '6rem',
        transform: 'translate(-10%, -35%)',
        '&::before': {
            content: "''",
            position: "absolute",
            left: "22%",
            bottom: "44px",
            width: "350px",
            height: "16px",
            transform: "skew(-30deg) translateX(-30%)",
            background: "rgba(248,188,36,0.8)",
            zIndex: -1,
        },
    },
}))