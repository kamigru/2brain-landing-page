import React from 'react';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-8 md:pb-0 pt-16 md:pt-20 px-4 md:px-5 bg-surface z-20 rounded-t-3xl md:rounded-t-[3rem]"
            style={{ scrollMarginTop: '4rem' }}
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-surface bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="text-center pt-12 md:pt-16 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:leading-tight max-w-4xl mx-auto whitespace-pre-line font-dm-sans leading-tight text-white mb-6">
                    Inteligente, Seguro, Simple{' '}
                    <span className="bg-gradient-to-r from-[#3A7AD4] to-[#5B21B6] bg-clip-text text-transparent">
                        Gestión de Objetivos
                    </span>
                </h1>
                <p className="mt-6 md:mt-8 text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed px-2">
                    {heroDetails.subheading}
                </p>
                
                {/* App Store Buttons */}
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <button className="flex items-center gap-3 bg-[#3A7AD4] hover:bg-[#2c5aa0] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                        <span className="text-2xl">📱</span>
                        <span>App Store</span>
                    </button>
                    <button className="flex items-center gap-3 bg-[#00A6C7] hover:bg-[#0088a3] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                        <span className="text-2xl">🤖</span>
                        <span>Google Play</span>
                    </button>
                </div>
                
                <div className="mt-6 md:mt-8">
                    <p className="text-sm md:text-base text-white/70 max-w-md mx-auto leading-relaxed">
                        Confiado por más de 50,000+ usuarios en todo el mundo
                    </p>
                </div>
                
                {/* Hero Mockup */}
                <div className="mt-12 md:mt-16 relative max-w-sm mx-auto">
                    {/* Phone mockup container */}
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                        {/* Phone screen */}
                        <div className="bg-[#1a1a1a] rounded-[2rem] p-6 h-[500px] flex flex-col">
                            {/* Status bar */}
                            <div className="flex items-center justify-center mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                    <span className="text-[#00d2ff] text-lg font-semibold">2Brain</span>
                                </div>
                            </div>

                            {/* Main content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="bg-gray-800 rounded-xl p-4 mb-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-6 h-6 bg-[#5B21B6] rounded flex items-center justify-center">
                                            <span className="text-white text-xs">📋</span>
                                        </div>
                                        <span className="text-white font-medium">Objetivo del día</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">Completar propuesta de proyecto</p>
                                    <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                                        <div className="bg-[#5B21B6] h-2 rounded-full w-3/4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#3A7AD4]/20 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
