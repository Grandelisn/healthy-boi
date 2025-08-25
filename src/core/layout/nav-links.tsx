import NavLink from '../components/nav-link/index';

export function NavLinks() {
	return (
		<nav className="flex">
			<NavLink to="/" end>
				Home
			</NavLink>
			<NavLink to="/diet-view" end>
				Diet View
			</NavLink>
			<NavLink to="/workout-view" end>
				Workout View
			</NavLink>
		</nav>
	);
}
