import type { Meta, StoryObj } from "@storybook/react";

import { Panel } from "../components";

const meta = {
  title: "Surfaces/Panel",
  component: Panel,
  decorators: [],
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: () => {},
    spacing: 10,
    color: "gray",
    children: <div style={{ padding: "1em" }}>This is the real children</div>,
  },
  decorators: [(Story) => <div style={{ padding: "10em" }}>{Story()}</div>],
};
