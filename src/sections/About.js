import styled from "styled-components";
import man4 from "../assets/images/man4.jpg";

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 80vw;
    display: flex;
    margin: 0 auto;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxx1};
    font-weight: 300;
    position: absolute;
    top: 3.5rem;
    left: 5%;
    z-index: 5;
`
const Left = styled.div`
    width: 50%;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    position: relative;
    x-index: 5;
    margin-top: 15%;
    margin-right: 9%;
    font-family: "Cuprum";

    p{
        line-height: 2.5;
    }
`
const Right = styled.div`
    width: 50%;
    font-size: ${props => props.theme.fontlg};
    position: relative;

    img{
        width: 100%;
        height: auto;
        margin-top: 15%;
    }
    .small-img-1{
        position: absolute;
        left: 70%;
        width: 40%;
        bottom: 3%;

    }
`

const About = () => {
    return (
        <Section id="fixed-target">
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                about us
            </Title>
            <Left data-scroll data-scroll-sticky data-scroll-target="fixed-target">
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    <br />
                    <br />
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    <br />
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                </p>
            </Left>
            <Right>
                <img data-scroll data-scroll-speed="5" src={man4} alt='About us' />
                <img src={man4} className="small-img-1" alt="Man with skateboard" />

            </Right>
        </Section>
    )
}

export default About;