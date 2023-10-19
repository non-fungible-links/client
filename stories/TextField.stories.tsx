import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TextField } from "../components";

const meta = {
  title: "Inputs/TextField",
  component: TextField,
  decorators: [],
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onChange: () => {},
    color: "red",
    label: "Your Email",
    value: "",
  },
  decorators: [(Story) => <div style={{ padding: "10em" }}>{Story()}</div>],
};
