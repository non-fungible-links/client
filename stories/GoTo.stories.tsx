import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { GoTo } from "../modules";

const meta = {
  title: "Modules/Goto/GoTo",
  component: GoTo,
  decorators: [],
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof GoTo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    selected: null,
    onSelect: () => {},
  },
  decorators: [
    (Story) => <div style={{ padding: "1em", height: 500 }}>{Story()}</div>,
  ],
};
