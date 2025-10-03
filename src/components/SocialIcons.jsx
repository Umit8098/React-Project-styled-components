import {FaTwitter, FaFacebook, FaLinkedin} from "react-icons/fa";
import SocialIconsStyle from "./styles/SocialIcons.style";

const SocialIcons = () => {
  return (
    <SocialIconsStyle>
        <li>
            <a href="https://twitter.com">
                <FaTwitter/>
            </a>
        </li>

        <li>
            <a href="https://facebook.com">
                <FaFacebook/>
            </a>
        </li>
        <li>
            <a href="https://linkedin.com">
                <FaLinkedin/>
            </a>
        </li>
    </SocialIconsStyle>
  )
}

export default SocialIcons;