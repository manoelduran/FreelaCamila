import { LogoDTO } from "../../../dtos/Header/Logo";
import Image from 'next/image';

const Logo: React.FC<LogoDTO> = ({ source, alt }) => {
    return (
        <Image src={source} alt={alt} />
    )
}

export { Logo };