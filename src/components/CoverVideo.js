import styled from "styled-components";
import Video6 from "../assets/Videos/Video6.mp4";
import { motion } from "framer-motion";
import { useState } from "react";

const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    span{
        color: ${props => props.click?  "red" : "orange" };
        text-shadow: 1px 1px 1px red;   
    }
`
const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,

        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

const Title = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${props => props.theme.text};
    cursor:  crosshair;

    h1{
        font-size: ${props => props.theme.fontBig};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
    }
    h2{
        font-family: 'Cuprum';
        font-size: ${props => props.theme.fontx1};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
    }
`

const CoverVideo = () => {
    const [click, setClick] = useState(false);
    return ( 
        <VideoContainer click={click}>
            <Title variants={container} initial="hidden" animate="show">
                <div>
                    <h1 data-scroll data-scroll-speed="4">Juicy Sc<span onMouseOver={() => setClick(!click)}>a</span>pe</h1> 
                    {/* slows down the scroll speed */}
                </div>
                <h2 data-scroll  data-scroll-delay="0.015" data-scroll-speed="4"> Natural. Refreshing. Unique </h2>
            </Title>
           <video src={Video6} type="video/mp4" autoPlay muted loop />
        </VideoContainer>
    );
}
 
export default CoverVideo;