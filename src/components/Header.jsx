import Button from './styles/Button.style'
import Container from './styles/Container.style'
import Flex from './styles/Flex.style'
import StyleHeader, { Image, Logo, Nav } from './styles/Header.style'

const Header = () => {
    return (
        <StyleHeader>
            <Container> 
                <Nav>
                    <Logo src='./images/logo.png' alt='logo'></Logo>
                    <div>
                        <Button color="#a62440">Apply Courses</Button>
                        <Button bg="#a62440">Talk to Adviser</Button>
                    </div>
                </Nav>
                <Flex>
                    <div>
                        <h1>The IT Career of Your Dreams Starts Here!</h1>
                        <p>
                            Clarusway is a leading international software Bootcamp. Join a micro class online with other trainees and learn coding skills with a highly-skilled instructor.
                        </p>
                        <Button bg="#A62440">Start Your New Carier</Button>
                    </div>
                    <Image src='./images/hero.jpg' alt='hero'></Image>
                </Flex>
            </Container>
        </StyleHeader>
    )
}

export default Header