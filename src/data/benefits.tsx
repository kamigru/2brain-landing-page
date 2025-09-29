import { FiEye, FiShield, FiHeart, FiUsers, FiTrendingUp, FiLock, FiCheckCircle, FiTarget, FiBrain, FiSmartphone, FiZap } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "¿Cansado de soluciones que no funcionan?",
        description: "Sabemos que has probado muchas aplicaciones que prometían cambiar tu vida instantáneamente. La realidad es que la mayoría genera más frustración que progreso real. 2Brain es diferente.",
        bullets: [
            {
                title: "Sin Falsas Promesas",
                description: "No prometemos milagros. Te ofrecemos herramientas basadas en ciencia conductual validada.",
                icon: <FiCheckCircle size={26} style={{ color: 'var(--accent)' }} />
            },
            {
                title: "Progreso Gradual",
                description: "Entendemos que el cambio real toma tiempo. Te acompañamos paso a paso.",
                icon: <FiTrendingUp size={26} style={{ color: 'var(--accent)' }} />
            },
            {
                title: "Sin Presión de Abstinencia",
                description: "No te forzamos a dejar todo de golpe. Trabajamos en reducir la frecuencia de forma natural.",
                icon: <FiTarget size={26} style={{ color: 'var(--accent)' }} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Te presentamos 2Brain: Tu Segundo Cerebro de IA",
        description: "El primer asistente de autoayuda con inteligencia artificial que te acompaña 24/7, usando psicología basada en evidencia y respetando tu privacidad absoluta.",
        bullets: [
            {
                title: "Progreso Visible",
                description: "Tus avances son siempre claros y medibles. Sabrás exactamente cómo estás mejorando.",
                icon: <FiEye size={26} style={{ color: 'var(--accent)' }} />
            },
            {
                title: "Ciencia Conductual",
                description: "Cada función está respaldada por técnicas validadas en estudios universitarios.",
                icon: <FiCheckCircle size={26} style={{ color: 'var(--accent)' }} />
            },
            {
                title: "Privacidad Absoluta",
                description: "Cero recolección de datos personales. Tu información es solo tuya, siempre.",
                icon: <FiShield size={26} style={{ color: 'var(--accent)' }} />
            }
        ],
        imageSrc: "/images/theboxx.png"
    },
    {
        title: "Diseñado para tu tranquilidad",
        description: "2Brain está pensado para tu bienestar integral. Una herramienta que te guía sin presionar, que apoya tu crecimiento personal de forma natural.",
        bullets: [
            {
                title: "Feedback Constructivo",
                description: "Sin juicios, solo apoyo. Cada interacción está diseñada para empoderarte.",
                icon: <FiHeart size={26} style={{ color: 'var(--accent)' }} />
            },
            {
                title: "Accesible y Fácil",
                description: "Interfaz intuitiva que se adapta a tu ritmo. Disponible cuando lo necesites, sin complicaciones.",
                icon: <FiUsers size={26} style={{ color: 'var(--accent)' }} />
            },
            {
                title: "Privacidad por Diseño",
                description: "Tus datos son solo tuyos. Nunca los compartimos, nunca los vendemos.",
                icon: <FiLock size={26} style={{ color: 'var(--accent)' }} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
]