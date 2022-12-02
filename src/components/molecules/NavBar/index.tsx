import React, { ReactFragment } from "react";
import { NavBarDTO } from "../../../dtos/Header/NavBar";
import { NavLink } from "../../atoms/NavLink";
import { Container } from "./styles";



const NavBar: React.FC<NavBarDTO> = ({ links }) => {
    return (
        <Container>
            <>
                {links && links.map((link) => (
                    <NavLink
                        key={link.id}
                        id={link.id}
                        title={link.title}
                    />
                )
                )}
            </>
        </Container>
    )
}

export { NavBar }