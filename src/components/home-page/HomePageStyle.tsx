import styled, { keyframes } from "styled-components";

const blobs = (count: number) => {
    let textShadow: string = "";

    const rnd = (n: number) => Math.random() * n;

    for (let n = 1; n < count; n++) {
        textShadow += `${(-.5 + rnd(10))}rem
        ${(-.5 + rnd(10))}rem
        7px
        hsla(${rnd(50)}, 100%, 50%, 1)${n === count - 1 ? '' : ', '}`;
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

const slideFromRight = keyframes`
    0% { 
        transform: translatex(-100%);
        color: rgba(0, 0, 0, 0);
    }
    20% {
        color: rgba(0, 0, 0, 0);
    }
    100% {
        transform: translatex(0);
        color: white;
    }
`;

const showImage = keyframes`
0% { 
    mix-blend-mode: luminosity;
    clip-path: circle(0)
}
100% {
    mix-blend-mode: luminosity;
    clip-path: circle(100%)
}
`;

const drawStroke = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

export const HomePageBackground = styled.main`
    background: linear-gradient(#f8d77b, #ff3c00);

    .home-page, .blobs {
        z-index: -2;

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
    }

    .home-page {
        --home-padding: 5rem;

        height: 100vh;
        padding: 3rem var(--home-padding);

        &::before {
            ${animatedBlobs(50, 53, -42)}
        }

        &::after {
            ${animatedBlobs(50, 52, -33)}
        }

        &__content {
            display: flex;
            justify-content: space-between;
        }

        &__intro-image {
            width: fit-content;

            &__top-banner {
                background-color: #002f45;
                padding: 1rem;
                padding-left: var(--home-padding);
                margin-left: calc(var(--home-padding) * -1);
                border-radius: 0 10px 10px 0;
                width: fit-content;
                position: absolute;
                bottom: 0;
                z-index: 3;
                animation: ${slideFromRight} 1s .5s both;

                span:first-child {
                    font-family: 'Assistant', sans-serif;
                    color: #f8d77b;
                    font-weight: bold;
                    font-size: rem;
                }
            }

            &__image {
                border-radius: 50%;
                overflow: hidden;
                width: fit-content;
                animation: ${showImage} 2s forwards;

                img {
                    width: 20rem;
                    position: relative;
                    z-index: 2;
                    filter: brightness(1.3) saturate(1.5);
                    mix-blend-mode: luminosity;
                    transition: all .3s;

                    &:hover {
                        filter: blur(3px);
                        mix-blend-mode: luminosity;
                        opacity: .5;
                    }
                }
            }            
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

    svg {
        filter: drop-shadow(1px 1px 1px #1a97d1)
            drop-shadow(1px 1px 1px #6bb8db)
            drop-shadow(1px 1px 1px #ffffff)
            drop-shadow(1px 1px 2px #ffffff);
        position: absolute;
        z-index: 3;

        .signature {
            width: 5rem;
            fill: none;
            stroke-dasharray: 1050;
            stroke-dashoffset: 1050;
            animation: ${drawStroke} 5s 1.5s forwards;
            stroke: #002f45;

            &.tail {
                animation: ${drawStroke} 3s 3s forwards;
            }

            &.dot {
                animation: ${drawStroke} 2s 3.6s forwards;
            }
        }
    } 
`;