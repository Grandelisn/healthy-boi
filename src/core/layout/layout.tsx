import { Outlet } from 'react-router';
import { NavLinks } from './nav-links';
import DatePicker from '../components/date-picker/index';
import { useState } from 'react';
export function Layout() {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<div>
			<NavLinks />
			<DatePicker startDate={startDate} setStartDate={setStartDate} />
			<Outlet />
		</div>
	);
}
