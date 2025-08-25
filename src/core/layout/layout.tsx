import { Outlet } from "react-router";
import { NavLinks } from "./nav-links";

export function Layout() {
  return (
    <div>
      <NavLinks />
      <Outlet />
    </div>
  )
}