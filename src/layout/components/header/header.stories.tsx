import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "..";

const meta: Meta = {
  title: "Layouts/Components/Header",
  component: Header,
};

const Template: StoryFn = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export const Default = Template.bind({});

export default meta;
