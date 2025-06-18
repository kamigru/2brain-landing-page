import { ctaDetails } from "@/data/cta"

import ZenboxButton from "./ZenboxButton"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20 pb-8 bg-secondary/30 rounded-3xl" style={{ scrollMarginTop: '8rem' }}>
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="h-full flex flex-col items-center justify-center text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl" style={{ color: 'var(--primary)' }}>{ctaDetails.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5 text-primary/90 text-lg">{ctaDetails.subheading}</p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <ZenboxButton variant="primary" size="lg" />
                            <ZenboxButton 
                                variant="secondary" 
                                size="lg" 
                                text="Más información"
                                className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30 hover:border-primary/50"
                            />
                        </div>
                        
                        <div className="mt-8 flex items-center gap-2 text-primary/70 text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            <span>Privacidad absoluta • Ciencia validada • Sin juicios</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA