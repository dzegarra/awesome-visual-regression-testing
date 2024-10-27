import { calculatePositionsInsideCircle } from '../helpers/calculatePositionsInsideCircle';
import { EmojiContainer } from './EmojiContainer';

type DobbleProps = {
  images: string[];
  randomnessFactor?: number;
};

export const DobbleCard = ({ images, randomnessFactor = 0, ...props}: DobbleProps) => {
  const positions = calculatePositionsInsideCircle(200, 200, images.length, randomnessFactor);
  const imagesWithPositions = images.map((image, index) => ({
    image,
    size: positions.size,
    position: positions.positions[index],
  }));

  return (
    <div className="relative w-52 h-52 rounded-full border-gray-300 border-4" {...props}>
      {imagesWithPositions.map((imagesWithPosition, index) => (
        <EmojiContainer
          key={index}
          style={{
            width: imagesWithPosition.size,
            height: imagesWithPosition.size,
            top: imagesWithPosition.position.y,
            left: imagesWithPosition.position.x,
          }}
        >
          {imagesWithPosition.image}
        </EmojiContainer>
      ))}
    </div>
  );
};
