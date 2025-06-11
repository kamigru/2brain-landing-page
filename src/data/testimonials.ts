import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Usuario Anónimo',
        role: 'Piloto Universitario',
        message: `La primera herramienta que me ayudó a entender y regular mis impulsos sin sentirme juzgado y con privacidad total. En 30 días reduje significativamente la frecuencia.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Familiar de Usuario',
        role: 'Cuidador',
        message: `${siteDetails.siteName} nos permitió ayudar sin confrontar. La claridad de uso y el respeto absoluto a la privacidad nos dieron la tranquilidad que necesitábamos.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Participante de Estudio',
        role: 'Validación Científica',
        message: `Por primera vez una herramienta me mostró progreso real y medible. No promesas vacías, sino datos claros sobre mi autocontrol día a día.`,
        avatar: '/images/testimonial-3.webp',
    },
];