import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `¿Realmente ${siteDetails.siteName} protege mi privacidad?`,
        answer: 'Absolutamente. Nuestro diseño es "privacidad por defecto": cero recolección de datos personales, nunca compartimos información y todo se procesa localmente en tu dispositivo.',
    },
    {
        question: `¿Cómo funciona el asistente de IA?`,
        answer: 'Tu asistente personal de IA utiliza algoritmos avanzados de inteligencia artificial para ofrecerte apoyo personalizado en tiempo real. Te ayuda a alcanzar tus objetivos sin juzgar tus decisiones.',
    },
    {
        question: '¿Está respaldado por ciencia real?',
        answer: `Sí. ${siteDetails.siteName} está validado en pilotos universitarios y cada función se basa en técnicas de psicología conductual con evidencia científica comprobada.`
    },
    {
        question: '¿Tengo que dejar todo de golpe?',
        answer: 'Para nada. 2Brain no impone cambios drásticos. Trabajamos contigo para crear hábitos saludables gradualmente, respetando tu ritmo y sin presiones.',
    },
    {
        question: '¿Qué pasa si necesito ayuda?',
        answer: 'Nuestro equipo de soporte está disponible 24/7 y entiende la sensibilidad del tema. Ofrecemos guías claras y apoyo sin juicios para maximizar tu progreso.'
    }
];