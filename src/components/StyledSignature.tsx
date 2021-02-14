import styled, { keyframes } from "styled-components";

const drawStroke = keyframes`
to {
    stroke-dashoffset: 0;
}
`;

export const StyledSignature = styled.svg`
    filter: drop-shadow(1px 1px 1px var(--color-primary--light))
        drop-shadow(1px 1px 1px var(--color-primary--lighter))
        drop-shadow(1px 1px 1px var(--white))
        drop-shadow(1px 1px 2px var(--white));
    position: absolute;
    z-index: 3;

    .signature {
        width: 5rem;
        fill: none;
        stroke-dasharray: 1050;
        stroke-dashoffset: 1050;
        animation: ${drawStroke} 5s 1.5s forwards;
        stroke: var(--color-primary);

        &.tail {
            animation: ${drawStroke} 3s 3s forwards;
        }

        &.dot {
            animation: ${drawStroke} 2s 3.6s forwards;
        }
    }`;