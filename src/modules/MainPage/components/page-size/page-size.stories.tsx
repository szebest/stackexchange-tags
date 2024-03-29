import { Meta, StoryFn } from "@storybook/react";

import { PageSize, PageSizeProps } from "..";

const meta: Meta<PageSizeProps> = {
  title: "Main Page/Page size",
  component: PageSize,
  argTypes: {
    pageSize: { name: "initialPageSize" },
    onPageSizeChange: { action: "onPageSizeChange" },
  },
};

const Template: StoryFn<PageSizeProps> = (args) => <PageSize {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageSize: 10,
};

export default meta;
