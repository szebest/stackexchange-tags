import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { Logo } from "..";

const meta: Meta = {
  title: "Layouts/Components/Logo",
  component: Logo,
};

const Template: StoryFn = () => (
  <BrowserRouter>
    <Logo />
  </BrowserRouter>
);

export const Default = Template.bind({});

export default meta;
