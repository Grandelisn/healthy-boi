import { DatePicker as ReactDatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DatePickerProps = {
	startDate: Date;
	setStartDate: React.Dispatch<React.SetStateAction<Date>>;
};
export function DatePicker({ startDate, setStartDate }: DatePickerProps) {
	return (
		<div>
			<ReactDatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date as Date)}
			/>
		</div>
	);
}
