import { ComponentProps } from "react";
import type { Story } from "@ladle/react";
import { DobbleCards } from "./DobbleCards";

export const Default: Story<ComponentProps<typeof DobbleCards>> = (props) => (
  <DobbleCards {...props} />
);
Default.args = {
  images: [
    "H",
    "E",
    "L",
    "L",
    "O",
    "-",
    "W",
    "O",
    "R",
    "L",
    "D",
    "!",
    "!",
  ],
  randomnessFactor: 0,
};
Default.argTypes = {
  randomnessFactor: {
    control: { type: "range", min: 0, max: 1, step: 0.1 },
  },
};
