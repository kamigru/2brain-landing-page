import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-16 md:pt-20 px-5 bg-surface-primary z-20 rounded-t-3xl md:rounded-t-[3rem]"
            style={{ scrollMarginTop: '6rem' }}
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-surface-primary bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>



            <div className="text-center pt-16 md:pt-20">
                <h1 className="text-4xl md:text-5xl md:leading-tight max-w-lg md:max-w-2xl mx-auto whitespace-pre-line font-dm-sans" style={{ color: 'var(--primary)' }}>{heroDetails.heading}</h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <AppStoreButton dark={true} />
                    <PlayStoreButton dark={true} />
                </div>
                <Image
                    src={heroDetails.centerImageSrc}
                    width={384}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={true}
                    unoptimized={true}
                    alt="zenbox - Caja inteligente para control de impulsos"
                    className='relative mt-12 md:mt-16 mx-auto z-10'
                />
            </div>
        </section>
    );
};

export default Hero;
