import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { Header } from "src/layout/components";

export type DefaultLayoutProps = {
  maxWidth?: string;
};

export function DefaultLayout({ maxWidth = "1920px" }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <Box sx={{ maxWidth, margin: 1 }}>
        <main>
          <ErrorBoundary
            fallback={<Box>There was an error while loading the page</Box>}
          >
            <Suspense fallback={<Box sx={{ width: "100%" }}>Loading...</Box>}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </main>
      </Box>
    </>
  );
}

export default DefaultLayout;
