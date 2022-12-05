import React from "react";
import { DescriptionDTO } from "../../../dtos/DescriptionDTO";
import { DescriptionText } from "./styles";


const Description: React.FC<DescriptionDTO> = ({ description }) => {
    return (
        <DescriptionText>
            {description}
        </DescriptionText>
    );
};

export { Description };