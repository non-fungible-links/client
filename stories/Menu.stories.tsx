import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "../modules";

const meta = {
  title: "Modules/Header/Menu",
  component: Menu,
  decorators: [],
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ padding: "10em", display: "flex", justifyContent: "center" }}
      >
        {Story()}
      </div>
    ),
  ],
};
