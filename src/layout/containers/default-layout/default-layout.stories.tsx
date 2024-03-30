import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DefaultLayout, DefaultLayoutProps } from "..";

type ArgType = DefaultLayoutProps & { text: string };

const meta: Meta<ArgType> = {
  title: "Layouts/Default Layout",
  component: DefaultLayout,
};

const Template: StoryFn<ArgType> = ({ text, ...args }) => (
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout {...args} />}>
        <Route path="/*" element={text} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  maxWidth: "1280px",
  text: "Sample text",
};

export default meta;
