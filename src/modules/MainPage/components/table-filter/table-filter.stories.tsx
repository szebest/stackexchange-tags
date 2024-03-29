import { Meta, StoryFn } from "@storybook/react";

import { TableFilter, TableFilterProps } from "..";

import { TagsQueryParams } from "@/modules/MainPage/models";

const meta: Meta<TableFilterProps> = {
  title: "Main Page/Table filter",
  component: TableFilter,
  argTypes: {
    handleChange: { action: "handleChange" },
  },
};

const Template: StoryFn<TableFilterProps> = (args) => <TableFilter {...args} />;

const query: TagsQueryParams = {
  pageSize: 10,
  page: 1,
  order: "desc",
  sort: "popular",
  site: "stackoverflow",
};

export const Default = Template.bind({});
Default.args = {
  query,
};

export default meta;
