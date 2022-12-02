import { Picture } from "../../atoms/Picture";
import { 
    Container,
    InfoContainer,
    Name,
    Position,
    Text,
    IconsContainer
 } from "./styles";
import CamilaSvg from '../../../assets/svg/camila.svg';
import InstagramSvg from '../../../assets/svg/instagram.svg';
import WhatsappSvg from '../../../assets/svg/whatsapp.svg';
import { Icon } from "../../atoms/Icon";


const Introduction: React.FC = ({ }) => {
    return (
        <Container>
            <InfoContainer>
            <Name>Dra. Camila Cendon Duran</Name>
            <Position>Reumatologista</Position>
            <Text>Me siga nas redes sociais:</Text>
            <IconsContainer>
                <Icon
                source={InstagramSvg}
                alt="Instagram Icon"
                onClick={() => {}}
                />
                <Icon
                source={WhatsappSvg}
                alt="Instagram Icon"
                onClick={() => {}}
                />
                <Icon
                source={InstagramSvg}
                alt="Instagram Icon"
                onClick={() => {}}
                />
            </IconsContainer>
            </InfoContainer>
            <Picture
            source={CamilaSvg}
            alt="Dra. Camila Da Silva Cendon Duran"
            />
        </Container>
    );
};

export { Introduction };