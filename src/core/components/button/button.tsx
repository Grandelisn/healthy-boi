import { twMerge } from 'tailwind-merge';
type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	styles?: string;
};

export function Button({ children, onClick, styles }: ButtonProps) {
	return (
		<button
			className={twMerge(
				'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
				styles
			)}
			onClick={onClick}>
			{children}
		</button>
	);
}
