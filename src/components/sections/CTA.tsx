import { ctaDetails } from "@/data/cta"

import TwoBrainButton from "../ui/buttons/2BrainButton"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-8 mb-16 lg:mt-20 lg:mb-24 pb-6 md:pb-8 relative overflow-visible" style={{ scrollMarginTop: '8rem' }}>
            {/* Contenedor con forma personalizada */}
            <div className="relative max-w-4xl mx-auto p-8 md:p-12 text-center border-2 border-purple-600/50 rounded-2xl overflow-hidden">

                {/* Fondo con degradado */}
                <div className="absolute inset-0" style={{
                    background: 'linear-gradient(135deg, var(--primary), var(--accent), var(--accent-light))',
                    opacity: '0.25'
                }}></div>
                <div className="absolute inset-0 bg-gray-900/60"></div>

                <div className="relative z-10 py-6 md:py-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 max-w-2xl mx-auto leading-tight text-white">
                        {ctaDetails.heading}
                    </h2>

                    <p className="mx-auto max-w-xl text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                        {ctaDetails.subheading}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full max-w-md sm:max-w-none mb-6">
                        <TwoBrainButton variant="primary" size="lg" className="w-full sm:w-auto" />
                        <TwoBrainButton
                            variant="secondary"
                            size="lg"
                            text="Más información"
                            className="w-full sm:w-auto"
                        />
                    </div>

                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm text-center">
                        <div className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }}></div>
                        <span className="leading-tight">Privacidad absoluta • Ciencia validada • Sin juicios</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA