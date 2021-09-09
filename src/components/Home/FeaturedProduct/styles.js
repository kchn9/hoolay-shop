import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '100%', // image ratio
        backgroundPositionY: '80%' // image position
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}));