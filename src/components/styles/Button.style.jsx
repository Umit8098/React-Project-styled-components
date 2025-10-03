import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({bg}) => ( bg  || '#fff')};
    color: ${({color}) => ( color  || '#fff')};
    // border: none;
    border: 1px solid #a62440;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    padding: 1rem 1.2rem;
    // margin: 10px;
    margin: 2rem 0.5rem;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.8;
        transform: translateY(-2px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
    }

    &:active {
        transform: translateY(0);
        box-shadow: none;
    }
`;

export default Button;

// props ile background-color ve color değerlerini dinamik olarak alabiliriz.