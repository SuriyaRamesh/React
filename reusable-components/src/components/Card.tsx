type CardProps = {
    title: string;
    description: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({title, description, children}) => {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white max-w-80 mb-4">
            <h2 className="text-black text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            {children}
        </div>
    )
}

export default Card;