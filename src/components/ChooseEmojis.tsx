import { ComponentProps } from "react";
import clsx from "clsx";
import { Button } from "./Button";

type ChooseEmojisProps = Omit<ComponentProps<"div">, "children"> & {
  emojis: string[];
  generateEmojis: () => void;
  setEmojis: (emojis: string[]) => void;
  requestDobble: () => void;
  allowShowCards: boolean;
};

export const ChooseEmojis = ({
  className,
  emojis,
  generateEmojis,
  setEmojis,
  requestDobble,
  allowShowCards = false,
}: ChooseEmojisProps) => (
  <div className={clsx("flex flex-col items-center gap-5", className)}>
    <p>Choose the emojis you want to use to generate the game:</p>

    <textarea
      className="w-auto text-9xl flex-auto"
      rows={3}
      value={emojis.join("")}
      onChange={(e) => {
        setEmojis(Array.from(e.target.value).filter((char) => !!char.trim()));
      }}
    />

    <div className="flex gap-5">
      <Button onClick={generateEmojis}>Generate</Button>
      <Button onClick={requestDobble} disabled={!allowShowCards}>
        See result
      </Button>
    </div>
  </div>
);
