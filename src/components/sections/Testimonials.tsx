import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg relative"
                >
                    {/* Comillas decorativas de apertura */}
                    <div className="absolute top-4 left-4 text-3xl font-serif leading-none" style={{ color: 'var(--accent)' }}>
                        &ldquo;
                    </div>
                    
                    {/* Comillas decorativas de cierre */}
                    <div className="absolute bottom-4 right-4 text-3xl font-serif leading-none" style={{ color: 'var(--accent)' }}>
                        &rdquo;
                    </div>
                    
                    <div className="pt-8">
                        {/* Información del autor arriba */}
                        <div className="flex items-center justify-center lg:justify-start mb-6">
                            <Image
                                src={testimonial.avatar}
                                alt={`${testimonial.name} avatar`}
                                width={45}
                                height={45}
                                className="rounded-full shadow-md border-2 border-white/30"
                            />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-strong)' }}>{testimonial.name}</h3>
                                <p className="text-sm" style={{ color: 'var(--accent)' }}>{testimonial.role}</p>
                            </div>
                        </div>
                        
                        {/* Mensaje del testimonio abajo */}
                        <p className="text-center lg:text-left leading-relaxed" style={{ color: 'var(--text)' }}>{testimonial.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
