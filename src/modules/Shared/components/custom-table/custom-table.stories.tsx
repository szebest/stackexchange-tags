import { Meta, StoryFn } from "@storybook/react";

import { CustomTable, CustomTableProps } from "..";

import { Box, TableCell, TableRow } from "@mui/material";

type Aligment = "left" | "center" | "right" | "justify";

type ArgType = CustomTableProps & {
  columns: number;
  rows: number;
  headerAligment: Aligment;
  bodyAligment: Aligment;
};

const meta: Meta<ArgType> = {
  title: "Modules/Shared/Components/Custom Table",
  component: CustomTable,
};

const Template: StoryFn<ArgType> = ({
  columns,
  rows,
  headerAligment,
  bodyAligment,
  ...args
}) => (
  <CustomTable
    {...args}
    header={[...Array(columns)].map((_, index) => (
      <TableCell key={index} align={headerAligment}>
        Column {index + 1}
      </TableCell>
    ))}
    body={[...Array(rows)].map((_, indexRows) => (
      <TableRow key={indexRows}>
        {[...Array(columns)].map((_, indexColumns) => (
          <TableCell key={indexColumns} align={bodyAligment}>
            Column {indexColumns + 1}, Row {indexRows + 1}
          </TableCell>
        ))}
      </TableRow>
    ))}
  />
);

export const HeaderAndBody = Template.bind({});
HeaderAndBody.args = {
  columns: 4,
  rows: 10,
  headerAligment: "left",
  bodyAligment: "left",
};

export const MaxHeight = Template.bind({});
MaxHeight.args = {
  columns: 4,
  rows: 10,
  headerAligment: "center",
  bodyAligment: "center",
  sx: { maxHeight: "400px" },
};

export const Footer = Template.bind({});
Footer.args = {
  columns: 4,
  rows: 10,
  headerAligment: "right",
  bodyAligment: "right",
  footer: <Box sx={{ m: 2 }}>Table footer example</Box>,
};

export const FooterMaxHeight = Template.bind({});
FooterMaxHeight.args = {
  columns: 4,
  rows: 10,
  headerAligment: "right",
  bodyAligment: "right",
  sx: { maxHeight: "400px" },
  footer: <Box sx={{ m: 2 }}>Table footer example</Box>,
};

export default meta;
