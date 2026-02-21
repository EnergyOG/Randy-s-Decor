import { Outlet } from "@tanstack/react-router";
import Navbar from "./component/NavBar";

export function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
