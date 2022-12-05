import { Picture } from "../../atoms/Picture";
import { SectionTitle } from "../../atoms/SectionTitle";
import { Container, Content } from "./styles";
import CamilaSvg from '../../../assets/svg/camila.svg';
import { ExperienceItem } from "../../molecules/ExperienceItem";


const Experiences = () => {
    return (
        <Container>
            <SectionTitle
                title="Experiências"
            />
            <Content>
                <ExperienceItem
                    text="Osteoporose"
                    src={CamilaSvg}
                    alt="Osteoporose"
                />
                <ExperienceItem
                    text="Doenças Autoimunes"
                    src={CamilaSvg}
                    alt="Doenças Autoimunes"
                />
            </Content>
            <Content>
                <ExperienceItem
                    text="Dor"
                    src={CamilaSvg}
                    alt="Dor"
                />
                <ExperienceItem
                    text="Fibromialgia e Fadiga Crônica"
                    src={CamilaSvg}
                    alt="Fibromialgia e Fadiga Crônica"
                />
            </Content>
        </Container>
    );
};

export { Experiences };