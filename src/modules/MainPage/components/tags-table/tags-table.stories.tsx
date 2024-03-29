import { Meta, StoryFn } from "@storybook/react";

import { TagsTable, TagsTableProps } from "..";

import { Tag, TagsQueryParams } from "@/modules/MainPage/models";

const meta: Meta<TagsTableProps> = {
  title: "Main Page/Tags table",
  component: TagsTable,
  argTypes: {
    onQueryChange: { action: "onQueryChange" },
  },
};

const Template: StoryFn<TagsTableProps> = (args) => <TagsTable {...args} />;

const generateItem = (index: number): Tag => {
  return {
    name: `test ${index}`,
    count: 10 + index,
    last_activity_date: index % 5 > 0 ? Date.now() : undefined,
  };
};

const query: TagsQueryParams = {
  pageSize: 10,
  page: 1,
  order: "desc",
  sort: "popular",
  site: "stackoverflow",
};

export const Loading = Template.bind({});
Loading.args = {
  query,
  isFetching: true,
};

export const Error = Template.bind({});
Error.args = {
  query,
  isError: true,
};

export const Data = Template.bind({});
Data.args = {
  query,
  data: {
    items: Array(10)
      .fill(0)
      .map((_, index) => generateItem(index)),
    total: 100,
  },
};

export default meta;
