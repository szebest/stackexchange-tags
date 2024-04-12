import { Navigate } from "react-router";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { queryClient } from "@/lib";
import { defaultTheme } from "@/theme";

// layouts
import { DefaultLayout } from "./layout/containers";

// module routes
import { MAIN_PAGE_ROUTES } from "@/modules/MainPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    children: MAIN_PAGE_ROUTES,
  },
  {
    path: "",
    element: <Navigate to="" replace />,
  },
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
