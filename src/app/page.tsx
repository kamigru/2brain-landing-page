import Hero from "@/components/sections/Hero";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import LazySection from "@/components/layout/LazySection";
import { lazy } from "react";

// Lazy load de los componentes pesados
const Benefits = lazy(() => import("@/components/Benefits/Benefits"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const FanImages = lazy(() => import("@/components/sections/FanImages"));
const FAQ = lazy(() => import("@/components/sections/FAQ"));
const Stats = lazy(() => import("@/components/sections/Stats"));
const CTA = lazy(() => import("@/components/sections/CTA"));
const Trust = lazy(() => import("@/components/sections/Trust"));

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero se carga inmediatamente */}
      <Hero />
      
      <div className="bg-gradient-to-b from-transparent via-black/10 to-transparent relative z-20 pb-0">
        {/* Benefits con lazy loading */}
        <LazySection delay={100}>
          <Container>
            <Benefits />
          </Container>
        </LazySection>

        {/* Sección FanImages con lazy loading - Todo el ancho */}
        <LazySection delay={150}>
          <FanImages />
        </LazySection>

        {/* Sección Confianza con lazy loading */}
        <LazySection delay={200}>
          <Container>
            <Section
              id="confianza"
              title="Confianza basada en hechos"
              description="Validado en pilotos universitarios y respaldado por ciencia conductual."
              primaryTitle={false}
              className="trust-section"
            >
              <Trust />
              <div className="mt-16 pt-18">
                <Stats />
              </div>
            </Section>
          </Container>
        </LazySection>

        {/* Sección de testimonios - con lazy loading */}
        <LazySection className="relative mt-10 lg:mt-16" delay={300}>
          <div className="max-w-[88rem] mx-auto px-4">
            <div className="relative px-8 md:px-12 py-6 md:py-8 border-2 border-purple-600/50 rounded-2xl overflow-hidden">
              {/* Fondo con degradado */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(135deg, var(--primary), var(--accent), var(--accent-light))',
                opacity: '0.25'
              }}></div>
              <div className="absolute inset-0 bg-gray-900/60"></div>

              <div className="relative z-10">
                <Section
                  id="testimonios"
                  title="Historias de autocontrol"
                  description="Experiencias auténticas de quienes han transformado sus impulsos."
                >
                  <Testimonials />
                </Section>
              </div>
            </div>
          </div>
        </LazySection>

        {/* FAQ y CTA con lazy loading */}
        <LazySection delay={400}>
          <Container>
            <FAQ />
            <CTA />
          </Container>
        </LazySection>
      </div>
    </>
  );
};

export default HomePage;
