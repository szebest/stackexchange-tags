import { Meta, StoryFn } from "@storybook/react";

import { PageSize, PageSizeProps } from "..";

const meta: Meta<PageSizeProps> = {
  title: "Modules/Main Page/Components/Page size",
  component: PageSize,
  argTypes: {
    defaultPageSize: { name: "initialPageSize" },
    onQueryChange: { action: "onQueryChange" },
  },
};

const Template: StoryFn<PageSizeProps> = (args) => <PageSize {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultPageSize: 10,
};

export default meta;
