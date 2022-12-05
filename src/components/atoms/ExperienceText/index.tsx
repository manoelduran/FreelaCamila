import React from "react";
import { DescriptionDTO } from "../../../dtos/DescriptionDTO";
import { ExperienceTextDTO } from "../../../dtos/ExperienceTextDTO";
import { Text } from "./styles";


const ExperienceText: React.FC<ExperienceTextDTO> = ({ text }) => {
    return (
        <Text>
            {text}
        </Text>
    );
};

export { ExperienceText };