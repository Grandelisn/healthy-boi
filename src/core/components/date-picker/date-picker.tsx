import { DatePicker as ReactDatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DatePickerProps = {
	startDate: Date;
	setStartDate: React.Dispatch<React.SetStateAction<Date>>;
};
export function DatePicker({ startDate, setStartDate }: DatePickerProps) {
	sessionStorage.setItem('startDate', startDate.toISOString());
	return (
		<div>
			<ReactDatePicker
				selected={startDate}
				onChange={(date) => {
					if (date) {
						setStartDate(date as Date);
						sessionStorage.setItem('startDate', date.toISOString());
					}
				}}
			/>
		</div>
	);
}
