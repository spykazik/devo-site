import { createGlobalStyle } from 'styled-components'
import CenturyGothic from './fonts/CenturyGothic.ttf'
import CenturyGothicBold from './fonts/CenturyGothic-Bold.ttf'

const GlobalStyle = createGlobalStyle`
    @font-face {
	font-family: CenturyGothic; 
    src: url(${CenturyGothic}) format('truetype');
    font-weight: normal;
    }
 
/* Жирный */
    @font-face {
	font-family: CenturyGothic; 
    src: url(${CenturyGothicBold}) format('truetype'); 
    font-weight: bold;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: CenturyGothic;
        font-weight: bold;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-decoration: none;
    }

    html, body{
        overflow-x: hidden;
        background: #EDF0F5;
    }
`
export default GlobalStyle;
