import styled, { keyframes } from "styled-components";

const blobs = (count: number) => {
    let textShadow: string = "";

    const rnd = (n: number) => Math.random() * n;
    const offset = () => `${(-.5 + rnd(10))}rem`;

    for (let n = 1; n < count; n++) {
        textShadow += `${offset()} ${offset()} 7px
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
        transform: scale(15) translateX(-20px) translateY(-50px) rotate(0deg);
    }
    to {
        transform: scale(25) translateX(20px) translateY(50px) rotate(360deg);
    }
`;

const slideFromRight = keyframes`
    0% { 
        transform: translatex(-100%);
        color: var(--transparent);
    }
    20% {
        color: var(--transparent);
    }
    100% {
        transform: translatex(0);
        color: var(--white);
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

export const StyledHomePage = styled.main.attrs((props) => ({
    blobAmount: 50,
    blobDuration: 50
}))`
    background: linear-gradient(var(--color-secondary-light), var(--color-secondary));

    .home-page, .blobs {
        &::before, &::after {
            content: '.';
            font-size: 3.5rem;
            color: transparent;
            position: absolute;
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
        position: relative;
        overflow: hidden;

        &::before {
            ${(props) => animatedBlobs(props.blobAmount, props.blobDuration + 3, -(props.blobDuration / 5 * 4))}
        }

        &::after {
            ${(props) => animatedBlobs(props.blobAmount, props.blobDuration + 2, -(props.blobDuration / 5 * 3))}
        }

        &__content {
            display: flex;
            justify-content: space-between;

            &__intro {
                width: fit-content;

                &__banner {
                    background-color: var(--color-primary);
                    padding: 1rem;
                    padding-left: var(--home-padding);
                    margin-left: calc(var(--home-padding) * -1);
                    border-radius: 0 10px 10px 0;
                    width: fit-content;
                    position: absolute;
                    bottom: 5rem;
                    color: var(--white);
                    animation: ${slideFromRight} 1s .5s both;

                    span:first-child {
                        font-family: 'Assistant', sans-serif;
                        color: var(--color-secondary-light);
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
    }

    .blobs {
        &::after, &::before {
            animation: ${float} infinite ease-in-out alternate-reverse;
        }

        &::before {
            ${(props) => animatedBlobs(props.blobAmount, props.blobDuration + 1, -(props.blobDuration / 5 * 2))}
        }

        &::after {
            ${(props) => animatedBlobs(props.blobAmount, props.blobDuration, -(props.blobDuration / 5))}
        }
    } 
`;