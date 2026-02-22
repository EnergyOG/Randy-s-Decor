import { Outlet } from "react-router-dom";
import Navbar from "../component/NavBar";

export function RootLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}
