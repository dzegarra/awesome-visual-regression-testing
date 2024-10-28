import { ComponentProps } from "react";
import type { Story } from "@ladle/react";
import { DobbleCard } from "./DobbleCard";

export const Default: Story<ComponentProps<typeof DobbleCard>> = (props) => (
  <DobbleCard {...props} />
);
Default.args = {
  images: ["H", "E", "L", "L", "O", "!"],
  randomnessFactor: 0,
};
Default.argTypes = {
  randomnessFactor: {
    control: { type: "range", min: 0, max: 1, step: 0.1 },
  },
};
