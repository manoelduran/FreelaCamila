import React from "react";
import { SectionTitleDTO } from "../../../dtos/SectionTitleDTO";
import { Title } from "./styles";

const SectionTitle: React.FC<SectionTitleDTO> = ({ title }) => {
    return (
        <Title>{title}</Title>
    );
};

export { SectionTitle };