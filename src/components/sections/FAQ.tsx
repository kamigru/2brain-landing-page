"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "../layout/SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-8 lg:py-20" style={{ scrollMarginTop: '8rem' }}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                <div className="text-center lg:text-left">
                    <SectionTitle style={{ color: 'var(--primary)' }}>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-2xl md:text-3xl lg:text-4xl">Preguntas Frecuentes</h2>
                    </SectionTitle>
                    <p className="mt-4 lg:mt-10 text-accent text-base md:text-lg">
                        ¡Pregúntanos lo que necesites!
                    </p>
                    <a 
                        href="mailto:contacto@zenbox.com" 
                        className="mt-3 block text-lg md:text-xl lg:text-4xl text-secondary font-semibold hover:text-secondary-accent transition-colors duration-300 active:scale-95"
                    >
                        contacto@zenbox.com
                    </a>
                </div>

                <div className="w-full lg:max-w-2xl mx-auto border-b border-primary/10">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4 md:mb-7">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex items-center justify-between w-full px-3 md:px-4 py-4 md:pt-7 text-left border-t border-primary/10 hover:bg-primary/5 transition-colors duration-200 rounded-lg">
                                            <span className="text-lg md:text-2xl font-semibold text-emphasis pr-4 leading-tight">
                                                {faq.question}
                                            </span>
                                            <div className="flex-shrink-0 ml-4">
                                                {open ? 
                                                    <BiMinus className="w-6 h-6 md:w-5 md:h-5" style={{ color: 'var(--accent)' }} /> : 
                                                    <BiPlus className="w-6 h-6 md:w-5 md:h-5" style={{ color: 'var(--accent)' }} />
                                                }
                                            </div>
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-3 md:px-4 pt-3 md:pt-4 pb-4 text-foreground-accent text-base md:text-lg leading-relaxed">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;