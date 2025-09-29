import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <div className="grid gap-8 max-w-lg w-full mx-auto lg:gap-6 lg:grid-cols-3 lg:max-w-full">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center p-6 pb-10 relative overflow-hidden rounded-3xl group hover:scale-105 transition-all duration-500">
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
                        {/* Comillas decorativas de apertura */}
                        <div className="absolute top-0 left-0 text-2xl font-serif leading-none text-white">
                            &ldquo;
                        </div>

                        {/* Comillas decorativas de cierre */}
                        <div className="absolute bottom-0 right-0 text-2xl font-serif leading-none text-white">
                            &rdquo;
                        </div>

                        <div className="pt-6">
                            {/* Información del autor arriba */}
                            <div className="flex items-center justify-center mb-4">
                                <Image
                                    src={testimonial.avatar}
                                    alt={`${testimonial.name} avatar`}
                                    width={40}
                                    height={40}
                                    className="rounded-full shadow-md border-2 border-white/30"
                                />
                                <div className="ml-3">
                                    <h3 className="text-base font-semibold text-white">{testimonial.name}</h3>
                                    <p className="text-xs text-gray-300">{testimonial.role}</p>
                                </div>
                            </div>

                            {/* Mensaje del testimonio abajo */}
                            <p className="text-center leading-relaxed text-sm text-gray-300">{testimonial.message}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
