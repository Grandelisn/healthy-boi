import { NavLink as ReactRouterNavLink } from 'react-router';
import type { NavLinkProps as ReactRouterNavLinkProps } from 'react-router';
import { twMerge } from 'tailwind-merge';

type NavLinkProps = {
	children: React.ReactNode;
} & ReactRouterNavLinkProps;

export function NavLink(props: NavLinkProps) {
	const baseStyles = 'text-white font-bold py-2 px-4 rounded';
	return (
		<ReactRouterNavLink
			{...props}
			className={({ isActive }) =>
				isActive
					? twMerge('bg-green-600', baseStyles)
					: twMerge('bg-red-600', baseStyles)
			}>
			{props.children}
		</ReactRouterNavLink>
	);
}
