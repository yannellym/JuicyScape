import styled from "styled-components";

const Section = styled.section`
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flext-start;
    position: relative;
`
const Title = styled.h1`
    font-size: ${props => props.theme.fontxxx1};
    font-weight: 300;
    position: absolute;
    top: 3.5rem;
    left: 25%;
    z-index: 10;
    color: orange;
    text-shadow: 1px 1px 1px ${props => props.theme.body};
`
const Left = styled.div`
    width: 35%;
    background-color: black;
    color: ${props => props.theme.text};
    min-height: 100vh;
    z-index: 5;
    position: fixed;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Cuprum";
    line-height: 2.5;

    p{
        font-size: ${props => props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        margin: 0 auto;
    }
`

const Right = styled.div`
    left: 35%;
    color: ${props => props.theme.grey};
    padding-left: 30%;
    min-height: 100vh;
    position: fixed;
    width: 65%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

   h1{
        width: 5rem;
        margin: 0 2rem;
    }
`


const Shop = () => {
    return ( 
        <Section>
            <Title data-scroll data-scroll-speed="-1">Latest Trends</Title>
            <Left>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet, consectetur adipiscing. lorem ipsum dolor sit amet.
                    <br />
                    <br />
                </p>
            </Left>
            <Right>
                <h1>img</h1>
                <h1>img</h1>
                <h1>img</h1>
            </Right>
        </Section>
     );
}
 
export default Shop;