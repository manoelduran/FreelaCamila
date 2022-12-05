import React from "react";
import { Picture } from "../../atoms/Picture";
import { SectionTitle } from "../../atoms/SectionTitle";
import { Container, Content } from "./styles";
import CamilaSvg from '../../../assets/svg/camila.svg';
import { Description } from "../../atoms/Description";


const About = () => {
    return (
        <Container>
            <SectionTitle title="Quem sou eu ?" />
            <Content>
                <Picture
                    source={CamilaSvg}
                    alt="Dra Camila da Silva Cendon Duran"
                />
                <Description
                description={`Sou Camila, tenho 31 anos. Sou formada em Medicina pela escola Bahiana de Medicina. 
                Atualmente tenho duas residêndias, sou clinica geral pelo hospital geral de Salvador, e Reumatologista pela USP.`}
                />
            </Content>
        </Container>
    );
};

export { About };