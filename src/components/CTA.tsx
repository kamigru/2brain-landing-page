import { ctaDetails } from "@/data/cta"

import ZenboxButton from "./ZenboxButton"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-8 mb-5 lg:my-20 pb-6 md:pb-8 bg-secondary/30 rounded-2xl md:rounded-3xl" style={{ scrollMarginTop: '8rem' }}>
            <div className="relative h-full w-full z-10 mx-auto py-8 sm:py-12 md:py-20">
                <div className="h-full w-full">
                    <div className="h-full flex flex-col items-center justify-center text-center px-4 md:px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl leading-tight" style={{ color: 'var(--primary)' }}>
                            {ctaDetails.heading}
                        </h2>

                        <p className="mx-auto max-w-xl px-2 md:px-5 text-primary/90 text-base md:text-lg leading-relaxed">
                            {ctaDetails.subheading}
                        </p>

                        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full max-w-md sm:max-w-none">
                            <ZenboxButton variant="primary" size="lg" className="w-full sm:w-auto" />
                            <ZenboxButton 
                                variant="secondary" 
                                size="lg" 
                                text="Más información"
                                className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30 hover:border-primary/50 w-full sm:w-auto"
                            />
                        </div>
                        
                        <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 text-primary/70 text-xs md:text-sm max-w-xs sm:max-w-none text-center">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse flex-shrink-0"></div>
                            <span className="leading-tight">Privacidad absoluta • Ciencia validada • Sin juicios</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA