import { calculateDobbles } from "../helpers/calculateDobbles";
import { Button } from "./Button";
import { DobbleCard } from "./DobbleCard";

type DobbleCardsProps = {
  images: string[];
  goBack: () => void;
  randomnessFactor?: number;
};

export const DobbleCards = ({
  images,
  goBack,
  randomnessFactor = 0,
}: DobbleCardsProps) => {
  const result = calculateDobbles(images, 3, false);

  return (
    <div>
      <h3 className="text-3xl font-bold">Number of images: {images.length}</h3>
      <h3 className="text-3xl font-bold">Number of cards: {result.length}</h3>

      <Button onClick={goBack}>Go back</Button>

      <div className="grid grid-cols-2 gap-4 place-items-center">
        {result.map((dobbles, index) => (
          <DobbleCard
            key={index}
            images={dobbles}
            randomnessFactor={randomnessFactor}
          />
        ))}
      </div>
    </div>
  );
};
