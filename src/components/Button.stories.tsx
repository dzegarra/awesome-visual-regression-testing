import { ComponentProps } from "react";
import type { Story } from "@ladle/react";
import { Button } from "./Button";

export const Default: Story<ComponentProps<typeof Button>> = (props) => <Button {...props}>Button content</Button>;
Default.argTypes = {
    onClick: { action: "clicked" },
}
