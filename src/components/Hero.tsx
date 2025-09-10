import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

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

            <div className="text-center pt-12 md:pt-16 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl md:leading-tight max-w-lg md:max-w-2xl mx-auto whitespace-pre-line font-dm-sans text-primary leading-tight">
                    {heroDetails.heading}
                </h1>
                <p className="mt-6 md:mt-8 text-foreground max-w-lg md:max-w-xl mx-auto text-lg md:text-xl leading-relaxed px-2">
                    {heroDetails.subheading}
                </p>
                
                {/* CTA Principal móvil */}
                <div className="mt-8 md:mt-10">
                    <Link 
                        href="#cta" 
                        className="inline-block bg-primary hover:bg-primary-hover text-white font-bold px-12 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-xl md:text-2xl"
                    >
                        Empieza tu plan
                    </Link>
                </div>

                {/* App Store Buttons */}
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <AppStoreButton dark={true} />
                    <PlayStoreButton dark={true} />
                </div>
                
                <div className="mt-6 md:mt-8">
                    <p className="text-sm md:text-base text-primary/70 max-w-md mx-auto leading-relaxed">
                        Privacidad absoluta • Sin juicios • Ciencia validada
                    </p>
                </div>
                
                {/* Hero Image */}
                <div className="mt-12 md:mt-16 relative">
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={384}
                        height={340}
                        quality={85}
                        sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 450px"
                        priority={true}
                        alt="zenbox - Caja inteligente para control de impulsos"
                        className='relative mx-auto z-10 max-w-[320px] md:max-w-[400px] lg:max-w-[450px] w-full h-auto'
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8A0XqN0qp1Htqm5+7fE/VKgMJWQZR7dYrn3s02KakLLKsLkI+d4OQPN0KABEAgMfLMHFWJ9CgdEagWsUPQNy2ZPmJWYWq8GWXKuQ7LfKaQSWtY7K9Vt4x9YrpQAWHKk5YCNiJQ/9k="
                    />
                    
                    {/* Floating elements for visual interest */}
                    <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-10 h-10 md:w-16 md:h-16 bg-accent/20 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-8 h-8 md:w-12 md:h-12 bg-secondary/30 rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
