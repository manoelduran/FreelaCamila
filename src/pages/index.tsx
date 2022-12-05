import { About } from "../components/organisms/About";
import { Experiences } from "../components/organisms/Experiences";
import { Header } from "../components/organisms/Header";
import { Introduction } from "../components/organisms/Introduction";
import { Container } from "../styles/pages/home";




export default function Home() {

  return (
    <Container >
      <Header />
      <Introduction/>
      <About/>
      <Experiences/>
    </Container>
  )
}
