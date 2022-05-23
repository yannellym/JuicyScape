import {createGlobalStyle} from 'styled-components';
import "@fontsource/blackout-midnight";
import "@fontsource/cuprum";

const GlobalStyles = createGlobalStyle`
   
    *, *::beforeAll, *::after{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: "Blackout Midnight", "Cuprum", sans-serif;
        overflow-x: hidden;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`
export default GlobalStyles;
