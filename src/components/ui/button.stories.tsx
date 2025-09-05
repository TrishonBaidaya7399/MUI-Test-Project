import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { theme } from "@/theme/theme";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    theme,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "contained",
    children: "Click Me",
  },
};
