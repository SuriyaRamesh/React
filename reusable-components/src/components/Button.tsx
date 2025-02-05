import clsx from 'clsx';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({variant = 'primary', size = 'medium', onClick, children}) => {

    const buttonClasses = clsx(
        'rounded-md font-semibold focus:outline-none px-4 py-2',
        {
            'bg-blue-600 text-white': variant === 'primary',
            'bg-gray-300 text-black': variant === 'secondary',
            'bg-red-600 text-white': variant === 'danger',
            'text-sm px-2': size === 'small',
            'text-base': size === 'medium',
            'text-lg px-5': size === 'large',
        }
    )

    return (
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;