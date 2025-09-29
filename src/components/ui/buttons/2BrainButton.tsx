import React from 'react';

interface TwoBrainButtonProps {
    text?: string;
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'accent';
    size?: 'sm' | 'md' | 'lg';
}

const TwoBrainButton: React.FC<TwoBrainButtonProps> = ({ 
    text = "Empieza tu plan", 
    className = "",
    onClick,
    variant = 'primary',
    size = 'md'
}) => {
    // Estilos base según variante
    const variantStyles = {
        primary: `
            bg-primary hover:bg-primary-hover active:bg-primary-active
            focus:bg-primary-focus focus:ring-2 focus:ring-primary-focus focus:ring-opacity-50
            text-text-inverse font-semibold
            shadow-lg hover:shadow-xl
        `,
        secondary: `
            bg-secondary hover:bg-secondary-hover active:bg-secondary-active
            focus:bg-secondary-focus focus:ring-2 focus:ring-secondary-focus focus:ring-opacity-50
            text-text-primary font-semibold
            shadow-md hover:shadow-lg
            border border-border-light
        `,
        accent: `
            bg-accent hover:bg-accent-hover active:bg-accent-active
            focus:bg-accent-focus focus:ring-2 focus:ring-accent-focus focus:ring-opacity-50
            text-text-primary font-semibold
            shadow-md hover:shadow-lg
        `
    };

    // Estilos de tamaño
    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-4 text-base',
        lg: 'px-10 py-5 text-lg'
    };

    return (
        <button
            onClick={onClick}
            className={`
                inline-flex items-center justify-center
                ${sizeStyles[size]}
                ${variantStyles[variant]}
                rounded-xl
                transition-all duration-200 ease-out
                transform hover:scale-105 active:scale-95
                focus:outline-none
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                ${className}
            `}
        >
            {text}
        </button>
    );
};

export default TwoBrainButton; 