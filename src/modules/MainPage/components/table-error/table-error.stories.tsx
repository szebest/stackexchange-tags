import { Meta, StoryFn } from "@storybook/react";

import { TableError, TableErrorProps } from "..";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type ArgType = TableErrorProps & { numberOfColumns: number };

const meta: Meta<ArgType> = {
  title: "Modules/Main Page/Components/Table error",
  component: TableError,
  argTypes: {
    refetch: { action: "refetch" },
    numberOfColumns: { type: "number", defaultValue: 4 },
  },
};

const Template: StoryFn<ArgType> = ({ numberOfColumns, ...args }) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {[...Array(numberOfColumns)].map((_, index) => (
            <TableCell key={index} />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableError {...args} />
      </TableBody>
    </Table>
  </TableContainer>
);

export const Default = Template.bind({});
Default.args = {
  colSpan: 4,
};

export const WithError = Template.bind({});
WithError.args = {
  colSpan: 4,
  error: "sample error message",
};

export default meta;
