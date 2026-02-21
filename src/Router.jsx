import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";

import Homepage from "./components/Homepage";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Homepage,
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({
  routeTree,
});