import { Sample } from "./sample.component";
import { Meta, StoryObj } from "@storybook/react";

type Component = typeof Sample;

type Story = StoryObj<Component>;

const meta = {
  component: Sample,
} satisfies Meta<Component>;

export const Default: Story = {};

export default meta;
