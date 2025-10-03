import styled from 'styled-components';

const SocialIconsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style-type: none;
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
    
    transition: color 0.3s ease;

    &:hover {
      color: #346988ff;
      border: 1px solid #346988ff;
    }
  }

`;

export default SocialIconsStyle;
