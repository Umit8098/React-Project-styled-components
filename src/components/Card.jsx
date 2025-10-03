import CardStyle from "./styles/Card.style"
import {Image} from "./styles/Header.style"

const Card = ({id, title, body, image}) => {
  return (
    <CardStyle odd={id % 2 && 'row-reverse'}>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
            <Image src={`./images/${image}`} alt={title} />
        </div>
    </CardStyle>
  );
};

export default Card;