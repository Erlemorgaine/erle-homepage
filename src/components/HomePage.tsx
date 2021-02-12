import React from "react";
import styled, { css, keyframes } from "styled-components";

// todo: styling in separate file

const blobs = (count: number) => {
    let textShadow: string = "";

    const rnd = (n: number) => Math.random() * n;

    for (let n = 1; n < count; n++) {
        textShadow += `${(-.5 + rnd(10))}rem
        ${(-.5 + rnd(10))}rem
        7px
        hsla(${rnd(50)}, 100%, 50%, .9)${n === count - 1 ? '' : ', '}`;
    };

    return `text-shadow: ${textShadow};`;
};

const animatedBlobs = (blobAmount: number, duration: number, delay: number) => `
    ${blobs(blobAmount)};
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
`;

const float = keyframes`
    from { 
        transform: scale(15) translate(-20px) rotate(0deg);
    }
    to {
        transform: scale(25) translate(20px) rotate(360deg);
    }
`;

const HomePageBackground = styled.main`
    background: linear-gradient(#f8cc7b, #ffc4b2);

    .home-page, .blobs {
        &::before, &::after {
            content: '.';
            font-size: 3.5rem;
            color: transparent;
            position: fixed;
            top: 30%;
            left: 40%;
            width: 3rem;
            height: 3rem;
            transform-origin: bottom right;
            mix-blend-mode: hard-light;
            animation: ${float} infinite ease-in-out alternate;
        }

        &__top-banner {
            background-color: pink;
        }
    }

    .home-page {
        height: 100vh;

        &::before {
            ${animatedBlobs(50, 53, -42)}
        }

        &::after {
            ${animatedBlobs(50, 52, -33)}
        }

        &__top-banner {
            background-color: pink;
        }
    }

    .blobs {
        &::after, &::before {
            animation: ${float} infinite ease-in-out alternate-reverse;
        }

        &::before {
            ${animatedBlobs(50, 51, -21)}
        }

        &::after {
            ${animatedBlobs(50, 50, -11)}
        }
    }
`;

function HomePage () {
    return <HomePageBackground>
        <div className="home-page">
        <div className="blobs"></div>
            <div className="home-page__top-banner">Front end development is awesome</div>
            <img src="" alt=""/>
            <div className="home-page__bottom-banner"></div>
        </div>
    </HomePageBackground>;
}

export default HomePage;