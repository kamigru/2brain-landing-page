import React from 'react';

interface zenboxButtonProps {
    text?: string;
    className?: string;
    onClick?: () => void;
}

const zenboxButton: React.FC<zenboxButtonProps> = ({ 
    text = "Empieza tu plan", 
    className = "",
    onClick 
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                inline-flex items-center justify-center
                px-8 py-4 
                bg-primary hover:bg-primary-accent
                text-white font-semibold
                rounded-xl
                transition-all duration-200 ease-out
                transform hover:scale-105
                shadow-lg hover:shadow-xl
                ${className}
            `}
        >
            {text}
        </button>
    );
};

export default zenboxButton; 