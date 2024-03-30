import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/lib";

import { QueryParamsProvider } from "@/modules/MainPage/providers";

import { MainPage } from "..";

const meta: Meta = {
  title: "Modules/Main Page/Pages/Main page",
  component: MainPage,
};

const Template: StoryFn = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <QueryParamsProvider>
        <MainPage />
      </QueryParamsProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export const Default = Template.bind({});

export default meta;
