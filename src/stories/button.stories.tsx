import { Button } from "@heroui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: fn(),
    primary: true,
    children: "Button",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button"));

    expect(canvas.getByRole("button")).toHaveTextContent(
      args.children as string
    );
    expect(args.onClick).toHaveBeenCalled();
  },
};
