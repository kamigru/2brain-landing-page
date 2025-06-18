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
      <div className="bg-surface relative z-20 pb-0">
        <Container>
          <Benefits />
          <Section
            id="confianza"
            title="Confianza basada en hechos"
            description="Validado en pilotos universitarios y respaldado por ciencia conductual."
            primaryTitle={true}
          >
            <Confianza />
            <div className="mt-16 pt-18">
              <Stats />
            </div>
          </Section>
        </Container>

        {/* Sección de testimonios con fondo rosáceo */}
        <div className="relative mt-10 lg:mt-16 lg:px-8 mx-4 lg:mx-12">
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
        </div>

        <Container>
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
