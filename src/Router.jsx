import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from "@tanstack/react-router";

import Navbar from "./component/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import BookUs from "./pages/BookUs";

// Root layout component
function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

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

const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
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
  shopRoute,
  bookUsRoute,
]);

export const router = createRouter({
  routeTree,
});