import React from 'react';
import { confianzaItems } from '@/data/confianza';

const Confianza: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
            {confianzaItems.map((item, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
                    <div className="flex justify-center mb-4">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                        {item.title}
                    </h3>
                    <p className="text-foreground-accent leading-relaxed text-base">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Confianza; 