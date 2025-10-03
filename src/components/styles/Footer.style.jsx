import styled from 'styled-components';

const FooterStyle = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: #fff;
    // text-align: center;
    padding: 2rem 0;
    // padding: 100px 0 60px;

    ul {
    list-style-type: none;
    }

    ul li {
    margin-bottom: 1rem;
    }
  

    // @media (max-width: ${({ theme }) => theme.mobile}) {
    //     text-align: center;

    //     ul {
    //         padding: 0;
    //     }
    // }
`;

export default FooterStyle;
