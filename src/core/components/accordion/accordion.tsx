import { useState } from 'react';
import type { ReactNode } from 'react';
import { AccordionItem } from './accordion-item';

export type AccordionProps = {
	children: ReactNode;
	header: ReactNode;
	expandIcon?: ReactNode;
	collapseIcon?: ReactNode;
	useHeadings?: boolean;
};

export function Accordion({
	children,
	header,
	expandIcon,
	collapseIcon,
	useHeadings = false,
}: AccordionProps) {
	type WrapperTag = 'div' | 'dl';
	const [openAccordion, setOpenAccordion] = useState<boolean>(false);
	const AccordionWrapper: WrapperTag = useHeadings ? 'div' : 'dl';

	return (
		<AccordionWrapper>
			<AccordionItem
				isOpen={openAccordion}
				onItemClick={() => {
					setOpenAccordion(!openAccordion);
				}}
				useHeadings={useHeadings}
				content={children}
				header={header}
				expandIcon={expandIcon}
				collapseIcon={collapseIcon}
			/>
		</AccordionWrapper>
	);
}
