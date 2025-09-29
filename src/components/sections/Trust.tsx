import React from 'react';
import { trustItems } from '@/data/trust';

const Trust: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
            {trustItems.map((item, index) => (
                <div key={index} className="text-center p-8 relative overflow-hidden rounded-3xl group hover:scale-105 transition-all duration-500">
                    {/* Fondo base oscuro */}
                    <div className="absolute inset-0 rounded-3xl" style={{
                        background: 'linear-gradient(135deg, var(--dark-bg-1), var(--dark-bg-2), var(--dark-bg-3))'
                    }}></div>

                    {/* Gradiente vibrante con nuevos colores metaverso */}
                    <div className="absolute inset-0 rounded-3xl" style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--accent), var(--secondary))',
                        opacity: '0.3'
                    }}></div>

                    {/* Glass effect */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl"></div>

                    {/* Borde brillante con nuevos colores */}
                    <div className="absolute inset-0 rounded-3xl border border-transparent bg-clip-border" style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--accent), var(--secondary))',
                        opacity: '0.5'
                    }}></div>
                    <div className="absolute inset-[1px] rounded-3xl" style={{
                        background: 'linear-gradient(135deg, var(--dark-bg-1), var(--dark-bg-2), var(--dark-bg-3))'
                    }}></div>

                    {/* Resplandor exterior con nuevos colores */}
                    <div className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--accent), var(--secondary))',
                        opacity: '0.2'
                    }}></div>

                    {/* Destello interno */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Contenido */}
                    <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                        {item.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white">
                        {item.title}
                    </h4>
                    <p className="leading-relaxed" style={{ color: 'var(--primary)' }}>
                        {item.description}
                    </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Trust; 