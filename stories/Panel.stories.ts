import type { Meta, StoryObj } from "@storybook/react";

import { Panel } from "../components";

import { Button } from "./Button";

const meta = {
  title: "Surfaces/Panel",
  component: Panel,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
interface PanelProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  spacing: number;
  color: "gray" | "red" | "purple" | "cyan" | "orange";
  children: JSX.Element;
}

*/

export const Primary: Story = {
  args: {
    onClick: () => {},
    spacing: 10,
    color: "gray",
  },
};
