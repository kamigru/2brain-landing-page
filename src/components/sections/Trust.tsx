import React from 'react';
import { trustItems } from '@/data/trust';

const Trust: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
            {trustItems.map((item, index) => (
                <div key={index} className="text-center p-8 bg-gray-900/40 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-900/60 transition-all duration-300 border border-gray-700/30">
                    <div className="flex justify-center mb-6">
                        {item.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white">
                        {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Trust; 