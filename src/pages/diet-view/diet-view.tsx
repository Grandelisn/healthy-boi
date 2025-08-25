import Accordion from '@/core/components/accordion';
import ItemList from '@/core/components/item-list/index';

export function DietView() {
	return (
		<div>
			<h1>Diet View</h1>
			<Accordion
				header="Item List"
				expandIcon={<span className="text-3xl font-extrabold">+</span>}
				collapseIcon={<span className="text-3xl font-extrabold">-</span>}>
				<ItemList items={['item 1', 'item 2', 'item 3']} />
			</Accordion>
		</div>
	);
}
