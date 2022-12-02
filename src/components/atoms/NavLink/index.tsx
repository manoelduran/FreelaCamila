import React from 'react';
import { NavLinkDTO } from '../../../dtos/Header/NavBar/NavLink';
import { LinkButton } from './styles';


const NavLink: React.FC<NavLinkDTO> = ({ id, title }) => {
    return (
        <LinkButton
            id={id}
            onClick={() => { }}
        >
            {title}
        </LinkButton>
    )
}


export { NavLink };