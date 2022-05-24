import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import NavBar from "../components/Navbar";

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    repeat: no-repeat;
`

const Home = () => {
    return (
        <Section>
            <CoverVideo />
            <Logo />
            <NavBar />
        </Section>
    )
}

export default Home;