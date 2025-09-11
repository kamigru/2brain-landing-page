import React from 'react';
import { trustItems } from '@/data/trust';

const Trust: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
            {trustItems.map((item, index) => (
                <div key={index} className="text-center p-8 bg-surface rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border-light/50">
                    <div className="flex justify-center mb-6">
                        {item.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4">
                        {item.title}
                    </h4>
                    <p className="text-emphasis leading-relaxed">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Trust; 