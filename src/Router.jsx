import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";

import { RootLayout } from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import BookUs from "./pages/BookUs";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: Gallery,
});

const reviewsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reviews",
  component: Shop,
});

const bookUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/book-us",
  component: BookUs,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  galleryRoute,
  reviewsRoute,
  bookUsRoute,
]);

export const router = createRouter({
  routeTree,
});