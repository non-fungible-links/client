import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CollectionSelector } from "../components";

const meta = {
  title: "Goto/CollectionSelector",
  component: CollectionSelector,
  decorators: [],
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof CollectionSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    selected: null,
    onSelect: () => {},
  },
  decorators: [(Story) => <div style={{ padding: "10em" }}>{Story()}</div>],
};
