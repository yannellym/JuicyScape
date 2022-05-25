import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from 'gsap';
import { useEffect } from "react";

const ScrollTriggerProxy = () => {
    const { scroll } = useLocomotiveScroll();  //instance of locomotive scrolll

    gsap.registerPlugin(ScrollTrigger) //register this

    useEffect(() => {
        if(scroll){
            const element = scroll?.el; //the locomotive scroll element is the app component 
            scroll.on('scroll', ScrollTrigger.update); // update scrollTrigger on the scroll of locomotive scroll;
            //Scroller proxy

            ScrollTrigger.scrollerProxy(element, {
                scrollTop(value) {
                  return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
                }, // we don't have to define a scrollLeft because we're only scrolling vertically.
                getBoundingClientRect() {
                    return {
                        top: 0, 
                        left: 0, 
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
                pinType: element.style.transform ? "transform" : "fixed"
              });
        }
        return () => {
            ScrollTrigger.addEventListener("refresh", () => scroll?.update())
            ScrollTrigger.refresh();
        };
    }, [scroll]);
    return null;
};
 
export default ScrollTriggerProxy;

//using gsap with locomotive scroll. Scroller proxy is needed and provided by GSAP.