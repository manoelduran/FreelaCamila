import React from "react";
import { ExperienceText } from "../../atoms/ExperienceText";
import { SectionTitle } from "../../atoms/SectionTitle";
import { Container, Content } from "./styles";


const Clinic: React.FC = () => {
    return (
        <Container>
            <SectionTitle
            title="Consultórios"
            />
            <Content>
                <ExperienceText
                text="Rua Arthur de Azevêdo Machado, 1459, Salvador"
                />
            </Content>
        </Container>
    );
};

export {Clinic};