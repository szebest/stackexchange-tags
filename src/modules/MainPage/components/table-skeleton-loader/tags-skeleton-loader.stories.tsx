import { Meta, StoryFn } from "@storybook/react";
import { Table, TableBody, TableContainer } from "@mui/material";

import { TableSkeletonLoader, TableSkeletonLoaderProps } from "..";

const meta: Meta<TableSkeletonLoaderProps> = {
  title: "Main Page/Table skeleton loader",
  component: TableSkeletonLoader,
};

const Template: StoryFn<TableSkeletonLoaderProps> = (args) => (
  <TableContainer>
    <Table>
      <TableBody>
        <TableSkeletonLoader {...args} />
      </TableBody>
    </Table>
  </TableContainer>
);

export const DefaultAnimation = Template.bind({});
DefaultAnimation.args = {
  rowsNumber: 4,
  variants: ["text", "text", "text"],
};

export const WaveAnimation = Template.bind({});
WaveAnimation.args = {
  rowsNumber: 4,
  variants: ["text", "text", "text"],
  animation: "wave",
};

export const PulseAnimation = Template.bind({});
PulseAnimation.args = {
  rowsNumber: 4,
  variants: ["text", "text", "text"],
  animation: "pulse",
};

export const RectangularVariant = Template.bind({});
RectangularVariant.args = {
  rowsNumber: 4,
  variants: ["rectangular", "rectangular", "rectangular"],
};

export const RoundedVariant = Template.bind({});
RoundedVariant.args = {
  rowsNumber: 4,
  variants: ["rounded", "rounded", "rounded"],
};

export default meta;
