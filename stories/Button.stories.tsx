import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "../components";

const meta = {
  title: "Inputs/Button",
  component: Button,
  decorators: [],
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: () => {},
    color: "red",
    label: "Click Me",
    size: "small",
    fullWidth: false,
  },
  decorators: [(Story) => <div style={{ padding: "10em" }}>{Story()}</div>],
};
