type ListProps = {
    items: string[];
}

const List: React.FC<ListProps> = ({items}) => {
    return (
        <ul className="list-disc pl-5">
            {items.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
            ))}
        </ul>
    )
}

export default List;
