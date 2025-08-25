import { NavLink } from "react-router";

export function NavLinks() {
  return (
    <nav className="flex gap-4">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/diet-view" end>
        Diet View
      </NavLink>
    </nav>
  );
}
