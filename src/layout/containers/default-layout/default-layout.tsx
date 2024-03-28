import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import { Box, CircularProgress, Fade } from "@mui/material";

import { Header } from "src/layout/components";

export type DefaultLayoutProps = {
  maxWidth?: string;
};

export function DefaultLayout({ maxWidth = "1920px" }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <Box sx={{ maxWidth, margin: "0 auto" }}>
        <Box sx={{ mx: 1, my: 2 }}>
          <main>
            <ErrorBoundary
              fallback={<Box>There was an error while loading the page</Box>}
            >
              <Suspense
                fallback={
                  <Box sx={{ width: "max-content", mx: "auto" }}>
                    <Fade in={true} timeout={2000}>
                      <CircularProgress />
                    </Fade>
                  </Box>
                }
              >
                <Outlet />
              </Suspense>
            </ErrorBoundary>
          </main>
        </Box>
      </Box>
    </>
  );
}

export default DefaultLayout;
