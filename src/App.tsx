import { lazy } from "react";
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/lib";

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
      <BrowserRouter>
        <Routes>
          <Route path="" element={<DefaultLayout />}>
            <Route index element={<MainPage />}></Route>
            <Route path="*" element={<Navigate to="" replace />} />
          </Route>

          <Route path="*" element={<Navigate to=""></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
