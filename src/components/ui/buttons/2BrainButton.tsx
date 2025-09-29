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
            bg-gradient-to-r from-primary via-accent to-primary-light
            hover:from-primary-hover hover:via-accent-hover hover:to-primary
            text-white font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40
            border border-primary/30 hover:border-primary/50
            relative overflow-hidden
        `,
        secondary: `
            bg-secondary hover:bg-secondary-hover
            text-white font-semibold
            border border-gray-600/50
        `,
        accent: `
            bg-accent hover:bg-accent-hover
            text-white font-semibold
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