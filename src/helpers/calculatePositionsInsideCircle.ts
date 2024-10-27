import { ImageLayout, Position } from "../types";

export function calculatePositionsInsideCircle(
    containerWidth: number, 
    containerHeight: number, 
    numberOfImages: number,
    /** Adjust this factor to control the amount of randomness */
    randomnessFactor = 0
): ImageLayout {
    const radius = Math.min(containerWidth, containerHeight) / 2;
    const angleStep = (2 * Math.PI) / numberOfImages;
    const imageSize = (2 * radius * Math.sin(Math.PI / numberOfImages)) / 2;

    const positions: Position[] = [];

    for (let i = 0; i < numberOfImages; i++) {
        const angle = i * angleStep;
        const randomOffsetX = (Math.random() - 0.5) * randomnessFactor * containerWidth;
        const randomOffsetY = (Math.random() - 0.5) * randomnessFactor * containerHeight;
        const x = containerWidth / 2 + (radius - imageSize / 2) * Math.cos(angle) - imageSize / 2 + randomOffsetX;
        const y = containerHeight / 2 + (radius - imageSize / 2) * Math.sin(angle) - imageSize / 2 + randomOffsetY;
        positions.push({ x, y });
    }

    return {
        size: imageSize,
        positions
    };
}
