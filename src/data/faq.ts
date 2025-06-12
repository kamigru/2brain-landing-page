import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `¿Realmente ${siteDetails.siteName} protege mi privacidad?`,
        answer: 'Absolutamente. Nuestro diseño es "privacidad por defecto": cero recolección de datos personales, nunca compartimos información y todo se procesa localmente en tu dispositivo.',
    },
    {
        question: `¿Cómo funciona la caja inteligente?`,
        answer: 'La caja usa sensores discretos y algoritmos de psicología conductual para detectar patrones de impulso. Te ayuda a crear pausas conscientes sin juzgar tus decisiones.',
    },
    {
        question: '¿Está respaldado por ciencia real?',
        answer: `Sí. ${siteDetails.siteName} está validado en pilotos universitarios y cada función se basa en técnicas de psicología conductual con evidencia científica comprobada.`
    },
    {
        question: '¿Tengo que dejar todo de golpe?',
        answer: 'Para nada. zenbox no impone abstinencia. Trabajamos en reducir gradualmente la frecuencia del impulso, respetando tu ritmo y sin presiones.',
    },
    {
        question: '¿Qué pasa si necesito ayuda?',
        answer: 'Nuestro equipo de soporte está disponible 24/7 y entiende la sensibilidad del tema. Ofrecemos guías claras y apoyo sin juicios para maximizar tu progreso.'
    }
];