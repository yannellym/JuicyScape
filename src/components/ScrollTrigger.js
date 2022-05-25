import { useLocomotiveScroll } from "react-locomotive-scroll";

const ScrollerTriggerProxy = () => {
    const { scroll } = useLocomotiveScroll();
}
 
export default ScrollerTriggerProxy;

//using gsap with locomotive scroll. Scroller proxy is needed and provided by GSAP.