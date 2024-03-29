import { lazy } from "react";
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";

import { queryClient } from "@/lib";
import { defaultTheme } from "@/theme";
import { QueryParamsProvider } from "@/modules/MainPage/providers";

// layouts
import { DefaultLayout } from "./layout/containers";

// pages
const MainPage = lazy(() =>
  import("./modules/MainPage").then((module) => ({
    default: module.MainPage,
  })),
);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<DefaultLayout />}>
              <Route
                index
                element={
                  <QueryParamsProvider>
                    <MainPage />
                  </QueryParamsProvider>
                }
              ></Route>
              <Route path="*" element={<Navigate to="" replace />} />
            </Route>

            <Route path="*" element={<Navigate to=""></Navigate>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
