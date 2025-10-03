import Container from "./styles/Container.style";
import Flex from "./styles/Flex.style";
import { Logo } from "./styles/Header.style";
import FooterStyle from "./styles/Footer.style";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <FooterStyle>    
        <Container>
            <Flex>
                <Flex>
                    <Logo src="./images/logo_white.png" alt="" />
                </Flex>
                <ul>
                    <li>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</li>
                    <li>+1 (571) 360 66 77</li>
                    <li>contact@clarusway.com</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>

                <SocialIcons />
            </Flex>
        </Container>
    </FooterStyle>
  )
}

export default Footer;