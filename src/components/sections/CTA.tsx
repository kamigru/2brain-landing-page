import { ctaDetails } from "@/data/cta"

import TwoBrainButton from "../ui/buttons/2BrainButton"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-8 mb-5 lg:my-20 pb-6 md:pb-8 bg-gray-900/40 rounded-2xl md:rounded-3xl border border-gray-700/30" style={{ scrollMarginTop: '8rem' }}>
            <div className="relative h-full w-full z-10 mx-auto py-8 sm:py-12 md:py-20">
                <div className="h-full w-full">
                    <div className="h-full flex flex-col items-center justify-center text-center px-4 md:px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl leading-tight text-white">
                            {ctaDetails.heading}
                        </h2>

                        <p className="mx-auto max-w-xl px-2 md:px-5 text-gray-300 text-base md:text-lg leading-relaxed">
                            {ctaDetails.subheading}
                        </p>

                        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full max-w-md sm:max-w-none">
                            <TwoBrainButton variant="primary" size="lg" className="w-full sm:w-auto" />
                            <TwoBrainButton
                                variant="secondary"
                                size="lg"
                                text="Más información"
                                className="bg-gray-800/50 hover:bg-gray-700/60 text-gray-300 border-gray-600/50 hover:border-gray-500/70 w-full sm:w-auto"
                            />
                        </div>

                        <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm max-w-xs sm:max-w-none text-center">
                            <div className="w-2 h-2 bg-[#5b21b6] rounded-full animate-pulse flex-shrink-0"></div>
                            <span className="leading-tight">Privacidad absoluta • Ciencia validada • Sin juicios</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA