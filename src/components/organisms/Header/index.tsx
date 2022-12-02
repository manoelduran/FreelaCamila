import React, { useMemo } from "react";
import { NavBar } from "../../molecules/NavBar";
import { Container } from "./styles";
import LogoSvg from '../../../assets/svg/logo.svg';
import navLinksInJson from '../../../assets/json/links.json';
import { Logo } from "../../atoms/Logo";



const Header: React.FC = () => {
    return (
        <Container>
            <Logo source={LogoSvg} alt="Logo Camila" />
            <NavBar links={navLinksInJson} />
        </Container>
    )
}

export { Header }