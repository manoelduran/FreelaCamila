import { About } from "../components/organisms/About";
import { Clinic } from "../components/organisms/Clinic";
import { Experiences } from "../components/organisms/Experiences";
import { Header } from "../components/organisms/Header";
import { Introduction } from "../components/organisms/Introduction";
import { Services } from "../components/organisms/Services";
import { Container } from "../styles/pages/home";




export default function Home() {

  return (
    <Container >
      <Header />
      <Introduction/>
      <About/>
      <Experiences/>
      <Services/>
      <Clinic/>
    </Container>
  )
}
