import styled from "styled-components";

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 80vw;
    overflow: hidden;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontBig};
    font-weight: 300;
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 5;
`
const Left = styled.section`
    font-size: ${props => props.theme.fontlg};
   
`
const Right = styled.section`
    font-size: ${props => props.theme.fontlg};
    
`

const About = () => {
    return (
        <Section>
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                about us
            </Title>
            <Left>
                Text
            </Left>
            <Right>
                Images
            </Right>
        </Section>
    )
}

export default About;