import type { ReactNode } from 'react';

export type AccordionItemProps = {
	content: ReactNode;
	header: ReactNode;
	expandIcon?: ReactNode;
	collapseIcon?: ReactNode;
};

export function AccordionItem({
	content,
	header,
	expandIcon,
	collapseIcon,
	isOpen,
	onItemClick,
	useHeadings = false,
}: AccordionItemProps & {
	isOpen: boolean;
	onItemClick: () => void;
	useHeadings?: boolean;
}) {
	type TermTag = 'div' | 'dt';
	type DefinitionTag = 'div' | 'dd';

	const AccordionItemTerm: TermTag = useHeadings ? 'div' : 'dt';
	const AccordionItemDefinition: DefinitionTag = useHeadings ? 'div' : 'dd';
	console.log(isOpen);
	return (
		<div>
			<div className="border-grey-divider flex gap-4">
				<AccordionItemTerm className="border-grey-divider flex cursor-pointer flex-col md:py-4 text-2xl">
					{header}
				</AccordionItemTerm>
				<button onClick={() => onItemClick()} className={`cursor-pointer`}>
					{isOpen ? collapseIcon : expandIcon}
				</button>
			</div>
			<AccordionItemDefinition
				className={`transition-opacity duration-500 ease-in-out ${
					isOpen ? 'opacity-100' : 'opacity-0'
				}`}>
				<div hidden={!isOpen}>
					<div>{content}</div>
				</div>
			</AccordionItemDefinition>
		</div>
	);
}
