import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 4rem 0;

    //! Theme'den gelen css kullanımı
    background-color: ${({ theme }) => theme.colors.header};
`;

export const Logo = styled.img`
    width: 300px;
    padding: 4rem 0;
`;


export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    //! Theme'den gelen Responsive Design
    @media (max-width: ${({ theme }) => theme.responsive}) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    width: 350px;
    border-radius: 10px;
    @media (max-width: ${({ theme }) => theme.responsive}) {
        margin: 40px;
    }
`;


export default StyledHeader;
