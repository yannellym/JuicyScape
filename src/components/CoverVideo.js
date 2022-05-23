import styled from "styled-components";
import Video6 from "../assets/Videos/Video6.mp4";

const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
// const DarkOverlay = styled.div`
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     z-index: 1;
// `
const Title = styled.div`
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
    return ( 
        <VideoContainer>
            <Title>
                <div>
                    <h1 data-scroll data-scroll-speed="4">Juicy Scape</h1>  
                    {/* slows down the scroll speed */}
                </div>
                <h2> Natural. Refreshing. Unique </h2>
            </Title>
           <video src={Video6} type="video/mp4" autoPlay muted loop />
        </VideoContainer>
    );
}
 
export default CoverVideo;