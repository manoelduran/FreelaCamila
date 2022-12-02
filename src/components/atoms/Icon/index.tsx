import React from "react";
import { IconDTO } from "../../../dtos/IconDTO";
import Image from 'next/image';
import {
    IconButton
} from './styles';


const Icon: React.FC<IconDTO> = ({ source, alt, onClick }) => {
    return (
        <IconButton onClick={onClick}>
            <Image src={source} alt={alt} style={{width: "50px" , height: "50px"}} />
        </IconButton>
    );
};

export { Icon };