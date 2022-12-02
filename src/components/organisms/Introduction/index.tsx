import { Picture } from "../../atoms/Picture";
import { 
    Container,
    InfoContainer,
    Name,
    Position,
    Text
 } from "./styles";
import CamilaSvg from '../../../assets/svg/camila.svg';


const Introduction: React.FC = ({ }) => {
    return (
        <Container>
            <InfoContainer>
            <Name>Dra. Camila Cendon Duran</Name>
            <Position>Reumatologista</Position>
            </InfoContainer>
            <Picture
            source={CamilaSvg}
            alt="Dra. Camila Da Silva Cendon Duran"
            />
        </Container>
    );
};

export { Introduction };