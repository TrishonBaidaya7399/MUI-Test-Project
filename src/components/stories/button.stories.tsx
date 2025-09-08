import { Button, ButtonProps } from "@mui/material";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon as Iconify } from "@iconify/react";
import { theme } from "@/theme/theme";

const meta = {
  title: "Design System/Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "contained",
    size: "medium",
    disabled: false,
    onClick: () => {},
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["contained", "outlined", "text", "link"],
      description: "Different appearance of the button",
      mapping: {
        link: "text",
      },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large", "icon-sm", "icon-md", "icon-lg"],
      description:
        "Default medium, icon-* must have only one icon as a child of button",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<ButtonProps>;

const iconGap = theme.spacing(1);

export const Primary = {
  args: {
    children: (
      <span style={{ display: "flex", alignItems: "center", gap: iconGap }}>
        <Iconify icon="material-symbols:add" width={20} height={20} />
        Add to Story
      </span>
    ),
    variant: "contained",
    color: "primary",
  },
} satisfies Story;

export const Secondary = {
  args: {
    children: (
      <span style={{ display: "flex", alignItems: "center", gap: iconGap }}>
        <Iconify icon="material-symbols:edit" width={20} height={20} />
        Edit Profile
      </span>
    ),
    variant: "outlined",
    color: "secondary",
  },
} satisfies Story;

export const Text = {
  args: {
    children: (
      <span style={{ display: "flex", alignItems: "center", gap: iconGap }}>
        <Iconify icon="material-symbols:thumb-up" width={20} height={20} />
        Like
      </span>
    ),
    variant: "text",
    color: "primary",
  },
} satisfies Story;

export const Icon = {
  args: {
    children: (
      <Iconify icon="material-symbols:notifications" width={24} height={24} />
    ),
    variant: "outlined",
    color: "secondary",
    size: "large",
    sx: { minWidth: 0, padding: 1 },
  },
} satisfies Story;

export const Link = {
  args: {
    children: "John Doe",
    variant: "text",
    color: "primary",
    sx: {
      textDecoration: "underline",
      padding: 0,
      minWidth: 0,
    },
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
    children: "Disabled",
    variant: "contained",
    color: "primary",
  },
} satisfies Story;

export const Small = {
  args: {
    size: "small",
    children: "Small Button",
    variant: "contained",
    color: "primary",
  },
} satisfies Story;
