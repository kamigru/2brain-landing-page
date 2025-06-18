import { FiEye, FiShield, FiHeart, FiUsers, FiTrendingUp, FiLock, FiCheckCircle, FiTarget } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "¿Cansado de soluciones que no funcionan?",
        description: "Sabemos que has probado muchas 'soluciones milagro' que prometían resultados inmediatos. La realidad es que la mayoría genera más frustración que progreso real. zenbox es diferente.",
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
        title: "Te presentamos zenbox: Esperanza Responsable",
        description: "La primera caja inteligente con app que transforma el impulso en autocontrol medible, usando psicología basada en evidencia y respetando tu privacidad absoluta.",
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
        description: "zenbox está pensado tanto para ti como para quienes te rodean. Una herramienta que ayuda sin confrontar, que apoya sin juzgar.",
        bullets: [
            {
                title: "Feedback Constructivo",
                description: "Sin juicios, solo apoyo. Cada interacción está diseñada para empoderarte.",
                icon: <FiHeart size={26} style={{ color: 'var(--accent)' }} />
            },
            {
                title: "Fácil para Cuidadores",
                description: "Ayuda sin confrontación para quienes te rodean. Claridad de uso y respeto total.",
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