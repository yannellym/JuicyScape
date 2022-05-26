import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import man1 from "../assets/images/man1.jpg";
import man2 from "../assets/images/man2.jpg";
import man3 from "../assets/images/man3.jpg";
import man4 from "../assets/images/man4.jpg";

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
    position: absolute;
    left: 35%;
    background-color: ${props => props.theme.grey};
    padding-left: 30%;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;

   h1{
        width: 5rem;
        margin: 0 2rem;
    }
`
const Item = styled.div`
    display: inline-block;
    width: 20rem;
    margin-right: 6rem;
    img{
        width: 100%;
        height: auto;
        cursor: pointer;
    }
    h1{
        font-weight: 500;
        text-align: center;
        cursor: pointer;
    }
`



const Product = ({img, title = ""}) => {
    return(
        <Item>
            <img src={img} alt="" srcSet="" />
            <h1>{title}</h1>
        </Item>
    )
};

const Gallery = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const horizontalRef = useRef(null);
    
    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = horizontalRef.current;
        let pinWrapWidth = scrollingElement.offsetWidth;
        let t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger : element,
                    start : "top top",
                    end : pinWrapWidth,
                    scroller: "app", //locomotive
                    scrub: true,
                    pin: true,
                    markers: true,
                },
                //increase scrolling height
                height: `${scrollingElement.scrollWidth}px`,
                ease: "none",
        })
        t1.to(scrollingElement, { //to scroll horizontally
            scrollTrigger: {
                trigger : scrollingElement,
                start : "top top",
                end : pinWrapWidth,
                scroller: "app", //locomotive
                scrub: true,
                markers: true,
            },
            //increase scrolling height of this and be the same as the scrolling element width
            x: -pinWrapWidth,
            ease: "none",
    })
        ScrollTrigger.refresh();
    }, 1000);

    return () => {
        };
    }, [])

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
            <Right ref={horizontalRef}>
                <Product img={man1} title="aaa" />
                <Product img={man2} title="aaa" />
                <Product img={man3} title="aaa" />
                <Product img={man4} title="aaa" />
                <Product img={man1} title="aaa" />
                <Product img={man2} title="aaa" />
                <Product img={man3} title="aaa" />
                <Product img={man4} title="aaa" />
                <Product img={man1} title="aaa" />
                <Product img={man2} title="aaa" />
                <Product img={man3} title="aaa" />
                <Product img={man4} title="aaa" />
            </Right>
        </Section>
     );
}
 
export default Gallery;