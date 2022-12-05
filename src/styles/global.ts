import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color:#f2f5fa;
    }
    p {
        font-family: 'MetropolisRegular';
    }
    a {
        font-family: 'MetropolisRegular';
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'MetropolisRegular';
        color: rgb(65, 104, 136);
    }
    li, ol, ul, input, span, button, label, p {
        font-family: 'MetropolisRegular';
        color: rgb(65, 104, 136);
    }
`;

export {GlobalStyle}
