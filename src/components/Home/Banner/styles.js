import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    content: {
        overflow: 'hidden',
        width: '100%'
    },
    image: {
        maxHeight: '100%',
        maxWidth: '100%',
        filter: 'grayscale(88%)',
    },
    text: {
        position: 'absolute',
        zIndex: '2',
        display: 'block',
        top: '30%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        '&::before': {
            content: "''",
            position: "absolute",
            left: "40%",
            bottom: "16px",
            width: "300px",
            height: "14px",
            transform: "skew(-30deg) translateX(-50%)",
            background: "rgba(248,188,36,0.8)",
            zIndex: -1,
        },
    },
}))