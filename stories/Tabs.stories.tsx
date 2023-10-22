import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "../components";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  decorators: [],
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "small",
    color: "gray",
    tabs: [
      {
        label: "First",
        value: "first",
      },
      {
        label: "Second",
        value: "second",
      },
      {
        label: "Third",
        value: "third",
      },
      {
        label: "Fourth",
        value: "fourth",
      },
    ],
    onChange: () => {},
    selected: "first",
  },
  decorators: [(Story) => <div style={{ padding: "10em" }}>{Story()}</div>],
};
