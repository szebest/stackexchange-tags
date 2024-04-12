import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const MainPage = lazy(() =>
  import("./pages").then((module) => ({
    default: module.MainPage,
  })),
);

export const MAIN_PAGE_ROUTES: RouteObject[] = [
  {
    path: "",
    Component: MainPage,
  },
  {
    path: "*",
    element: <Navigate to="" replace />,
  },
];
