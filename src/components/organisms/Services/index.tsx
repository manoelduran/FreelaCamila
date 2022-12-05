import React from "react";
import { SectionTitle } from "../../atoms/SectionTitle";
import { ServiceLeftItem } from "../../molecules/ServiceLeftItem";
import { ServiceRightItem } from "../../molecules/ServiceRightItem";
import { Container } from "./styles";
import CamilaSvg from '../../../assets/svg/camila.svg';

const Services: React.FC = () => {
    return (
        <Container>
            <SectionTitle
            title="Serviços"
            />
            <ServiceLeftItem
            text="Cuido dos Ossos"
            src={CamilaSvg}
            alt="Service 1"
            />
            <ServiceRightItem
                      text="Cuido dos Ossos"
            src={CamilaSvg}
            alt="Service 2"
            />
             <ServiceLeftItem
                      text="Cuido dos Ossos"
            src={CamilaSvg}
            alt="Service 3"
            />
            <ServiceRightItem
                      text="Cuido dos Ossos"
            src={CamilaSvg}
            alt="Service 4"
            />
        </Container>
    );
};

export {Services};