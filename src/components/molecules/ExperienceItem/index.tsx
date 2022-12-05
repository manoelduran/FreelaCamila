import React from "react";
import { ExperienceItemDTO } from "../../../dtos/ExperienceItemDTO";
import { ExperienceText } from "../../atoms/ExperienceText";
import { Picture } from "../../atoms/Picture";
import { Container } from "./styles";


const ExperienceItem: React.FC<ExperienceItemDTO> = ({text, src, alt}) => {
    return (
        <Container>
            <ExperienceText
                text={text}
            />
            <Picture
                source={src}
                alt={alt}
            />
        </Container>
    );
};

export { ExperienceItem };