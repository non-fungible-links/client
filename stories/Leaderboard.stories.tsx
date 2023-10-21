import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Leaderboard } from "../modules";

import { startMoralis } from "../modules/hooks/startMoralis";

const meta = {
  title: "Modules/Leaderboard/Leaderboard",
  component: Leaderboard,
  decorators: [],
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Leaderboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    selected: null,
    onSelect: () => {},
  },
  decorators: [
    (Story) => {
      startMoralis();

      return <div style={{ padding: "1em", height: 500 }}>{Story()}</div>;
    },
  ],
};
