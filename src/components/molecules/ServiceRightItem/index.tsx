import { ServiceItemDTO } from "../../../dtos/ServiceItemDTO";
import { Description } from "../../atoms/Description";
import { Picture } from "../../atoms/Picture";
import { Container } from "./styles";


const ServiceRightItem: React.FC<ServiceItemDTO> = ({src, alt, text}) => {
    return (
        <Container>
               <Description
            description={text}
            />
               <Picture
            source={src}
            alt={alt}
            />
         
        </Container>
    );
};

export {ServiceRightItem};