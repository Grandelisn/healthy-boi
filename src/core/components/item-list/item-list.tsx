import Item from './item';

type ItemListProps = {
	items: string[];
};

export function ItemList({ items }: ItemListProps) {
	return (
		<ul>
			{items.map((item, index) => {
				return <Item key={index}>item {index}</Item>;
			})}
		</ul>
	);
}
