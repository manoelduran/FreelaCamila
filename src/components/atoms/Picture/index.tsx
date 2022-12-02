import React from 'react';
import Image from 'next/image';
import { PictureDTO } from "../../../dtos/PictureDTO";

const Picture: React.FC<PictureDTO> = ({ source, alt }) => {
    return (
        <Image src={source} alt={alt} style={{width: "350px" , height: "350px", borderRadius: "100%"}}/>
    )
}

export { Picture };