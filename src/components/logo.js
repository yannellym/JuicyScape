import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
    position: absolute;
    top: -1rem;
    left: 1rem;
    width: 100%;
    color: ${props => props.theme.text};
    z-index: 5;
    color: black;

    svg{
        width: 10rem;
        height: auto;
        overflow: visible;
        stroke-linejoin: round;
        stroke-linecap: round;

        g{
            path{
                stroke: ${props => props.theme.fontlg};
                color: ${props => props.theme.next};
                padding-bottom: 0.5rem;
            }
        }
    }
`

// const Text = styled.span`
//     font-size: ${props => props.theme.font}

// `


const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,

        transition: {
            duration: 6,
            ease: 'easeInOut'
        }
    }
}



const Logo = () => {
    return (
        <Container>
            <Link to="/">
            <svg version="1.0" xmlns="http://www.w3.org/6000/svg"
                width="150" height="190" viewBox="0 90 500 500"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,500.000000) scale(0.1579,-0.12000)"
                fill="#000000" stroke="none">
                <motion.path variants={pathVariants} initial="hidden" animate="visible"
                d="M3269 2973 c-3 -23 4 -99 9 -108 4 -5 9 3 12 20 3 20 13 31 30 36 23
                6 22 7 -8 8 -26 1 -33 5 -30 18 2 10 16 21 33 24 29 6 29 7 -7 8 -21 0 -38 -2
                -39 -6z"/>
                <path d="M3405 2945 c-8 -14 -22 -36 -30 -50 -9 -14 -11 -25 -6 -25 5 0 13 5
                16 10 11 18 47 11 52 -10 10 -39 23 -19 17 28 -10 81 -21 92 -49 47z m35 -32
                c0 -7 -9 -13 -20 -13 -23 0 -24 4 -9 32 9 17 13 18 20 7 5 -8 9 -20 9 -26z"/>
                <path d="M3527 2929 c-17 -10 -24 -49 -9 -49 4 0 16 -7 26 -15 16 -12 17 -17
                6 -30 -12 -14 -15 -14 -37 1 -14 8 -27 13 -30 11 -2 -3 7 -13 22 -23 20 -13
                31 -15 44 -7 24 15 25 43 2 59 -22 16 -29 44 -10 44 6 0 19 -5 31 -11 31 -16
                31 -5 0 13 -19 12 -32 14 -45 7z"/>
                <path d="M3611 2824 c-23 -20 -39 -39 -36 -42 3 -3 13 2 23 11 18 16 20 16 37
                -3 17 -19 17 -21 0 -40 -10 -11 -16 -22 -14 -24 7 -7 89 64 89 76 0 6 -9 3
                -20 -7 -20 -18 -21 -18 -42 3 -22 21 -22 22 -3 36 11 8 17 17 13 21 -3 4 -25
                -10 -47 -31z"/>
                <path d="M3740 2734 c0 -15 -75 -48 -89 -40 -14 9 -14 -4 -1 -24 7 -10 12 -12
                18 -4 11 17 71 46 82 39 13 -8 13 6 0 25 -5 8 -10 10 -10 4z"/>
                <path d="M1660 2670 l0 -50 168 2 167 3 0 45 0 45 -167 3 -168 2 0 -50z"/>
                <path d="M2209 2707 c-143 -41 -224 -193 -185 -347 23 -90 60 -138 141 -183
                54 -29 181 -31 239 -3 164 82 205 316 80 455 -24 27 -62 56 -84 65 -56 22
                -137 28 -191 13z m167 -118 c95 -58 97 -243 4 -309 -44 -31 -116 -38 -164 -15
                -106 51 -127 223 -37 309 52 50 132 56 197 15z"/>
                <path d="M2263 2479 c-30 -11 -38 -45 -19 -74 20 -31 56 -32 81 -5 36 40 -10
                99 -62 79z"/>
                <path d="M2590 2666 l0 -56 113 0 c128 0 157 -11 157 -59 0 -53 -29 -66 -156
                -69 l-114 -4 0 -164 0 -164 50 0 50 0 0 114 0 114 78 4 c128 6 187 50 199 147
                8 68 -22 129 -80 161 -37 21 -58 25 -169 28 l-128 4 0 -56z"/>
                <path d="M2990 2435 l0 -285 136 0 135 0 -3 53 -3 52 -77 3 -78 3 0 59 0 59
                113 3 112 3 0 50 0 50 -112 3 -113 3 0 59 0 59 78 3 77 3 3 53 3 52 -135 0
                -136 0 0 -285z"/>
                <path d="M3716 2641 c-39 -8 -50 -29 -37 -65 11 -27 14 -28 53 -22 22 4 45 9
                50 12 12 8 10 58 -4 72 -13 13 -17 13 -62 3z m62 -39 c3 -22 -1 -25 -51 -36
                -22 -5 -29 -2 -36 16 -12 30 12 50 54 46 22 -2 31 -9 33 -26z"/>
                <path d="M3680 2511 c0 -6 12 -11 28 -12 59 -1 64 -14 12 -32 -27 -10 -50 -22
                -50 -26 0 -9 61 -21 100 -20 16 1 7 6 -23 13 l-49 11 51 19 c58 21 64 32 21
                40 -16 3 -43 9 -60 12 -18 3 -30 1 -30 -5z"/>
                <path d="M1770 2330 l0 -180 55 0 55 0 0 180 0 180 -55 0 -55 0 0 -180z"/>
                </g>
                </svg>
            </Link>
        </Container>
    );
}

export default Logo;