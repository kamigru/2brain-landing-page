import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
// import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Confianza from "@/components/Confianza";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <div className="bg-hero-background relative z-20 pb-0">
        <Container>
          {/* Sección de características principales */}
          <Benefits />

          {/* Sección de confianza y estadísticas */}
          <Section
            id="confianza"
            title="Confianza basada en hechos"
            description="Validado en pilotos universitarios y respaldado por ciencia conductual."
          >
            <Confianza />
            <div className="mt-16">
              <Stats />
            </div>
          </Section>

          {/* Sección de testimonios */}
          <Section
            id="testimonios"
            title="Historias de autocontrol"
            description="Experiencias auténticas de quienes han transformado sus impulsos."
          >
            <Testimonials />
          </Section>

          {/* Preguntas frecuentes */}
          <FAQ />
          
          {/* Call to Action final */}
          <CTA />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
