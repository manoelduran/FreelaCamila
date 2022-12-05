import React from "react";
import { ServiceItemDTO } from "../../../dtos/ServiceItemDTO";
import { Description } from "../../atoms/Description";
import { Picture } from "../../atoms/Picture";
import { Container } from "./styles";


const ServiceLeftItem: React.FC<ServiceItemDTO> = ({src, alt, text}) => {
    return (
        <Container>
            <Picture
            source={src}
            alt={alt}
            />
            <Description
            description={text}
            />
        </Container>
    );
};

export {ServiceLeftItem};