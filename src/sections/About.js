import styled from "styled-components";

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 80vw;
    overflow: hidden;
    display: flex;
    margin: 0 auto;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontBig};
    font-weight: 300;
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 5;
`
const Left = styled.div`
    width: 50%;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    position: relative;
    x-index: 5;
    margin-top: 25%;
    font-family: "Cuprum";

    p{
        line-height: 2;
    }
`
const Right = styled.div`
    width: 50%;
    font-size: ${props => props.theme.fontlg};
    
`

const About = () => {
    return (
        <Section>
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                about us
            </Title>
            <Left data-scroll data-scroll-sticky data-scroll-target="fixed-target">
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    <br />
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                </p>
            </Left>
            <Right>
                Images
            </Right>
        </Section>
    )
}

export default About;