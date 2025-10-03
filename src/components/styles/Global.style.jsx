import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f4f4f4;
        color: "#00252e";
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
    }
    
    p {
    opacity: 0.6;
    line-height: 1.5;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle;
//! GlobalStyle ile tüm uygulamaya genel stiller ekleyebiliriz.