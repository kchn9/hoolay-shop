import { createTheme } from '@material-ui/core/styles';
import { responsiveFontSizes } from '@material-ui/core';
import './fonts.css';

let th = createTheme({
    palette: {
        primary: {
            main: '#0F0F0F',
            contrastText: '#f0f0f0',
        },
        type: "dark",
        secondary: {
            main: '#f8bc24',
        },
        text: {
            primary: '#f0f0f0',
            secondary: '#f0f0f0',
        },
        background: {
            default: '#0f0f0f',
            paper: '#0f0f0f',
            secondary: '#f0f0f0',
        },
        grey: {
            gainsboro: '#dcdcdc',
        }
    },
    typography: {
        fontFamily: ['Urbanist', 'apple-system', 'Arial', 'sans-serif']
    },
})

const Theme = responsiveFontSizes(th);
export default Theme;