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
            bg-gradient-to-r from-blue-400 via-purple-600 to-blue-800
            text-white font-semibold
            border border-white/20
            relative overflow-hidden
        `,
        secondary: `
            bg-transparent
            text-white font-semibold
            border border-transparent bg-clip-padding
            relative
            before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-blue-400 before:via-purple-600 before:to-blue-800 before:rounded-xl before:-z-10
            after:absolute after:inset-[1px] after:bg-gray-900/95 after:rounded-[calc(0.75rem-1px)] after:-z-10
        `,
        accent: `
            bg-gradient-to-r from-blue-400 via-purple-600 to-blue-800
            text-white font-semibold
            border border-white/20
            relative overflow-hidden
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
                transition-transform duration-200 ease-out
                hover:scale-105
                focus:outline-none
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                ${className}
            `}
        >
            {text}
        </button>
    );
};

export default TwoBrainButton; 