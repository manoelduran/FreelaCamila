import Link from "next/link";
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

                <a href="https://www.google.com/maps/place/12%C2%B059'13.6%22S+38%C2%B026'55.5%22W/@-12.9871101,-38.4487495,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xf0b9310237e2ece5!8m2!3d-12.9871101!4d-38.4487495">
                    <ExperienceText
                        text="Rua Arthur de Azevêdo Machado, 1459, Salvador"
                    />
                </a>

            </Content>
        </Container>
    );
};

export { Clinic };