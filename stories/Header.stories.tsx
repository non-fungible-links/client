import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "../modules";

const meta = {
  title: "Modules/Header/Header",
  component: Header,
  decorators: [],
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "1em",
          paddingBottom: "3em",
        }}
      >
        {Story()}
      </div>
    ),
  ],
};
