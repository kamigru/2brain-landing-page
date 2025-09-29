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
      
      <div className="bg-surface relative z-20 pb-0">
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

        {/* Sección de testimonios con fondo rosáceo - con lazy loading */}
        <LazySection className="relative mt-10 lg:mt-16 lg:px-8 mx-4 lg:mx-12" delay={300}>
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 w-full" style={{ backgroundColor: 'var(--background)' }}>
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#30938b,transparent)]"></div>
            <div className="rounded-3xl absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5"></div>
          </div>
          <Container>
            <Section
              id="testimonios"
              title="Historias de autocontrol"
              description="Experiencias auténticas de quienes han transformado sus impulsos."
              className="text-on-dark py-8 lg:py-12"
            >
              <Testimonials />
            </Section>
          </Container>
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
