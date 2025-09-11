import { FiAward, FiHeart, FiShield } from "react-icons/fi";

export interface ITrust {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const trustItems: ITrust[] = [
    {
        title: "Validado Científicamente",
        description: "Respaldado por pilotos universitarios y técnicas de psicología conductual con evidencia comprobada.",
        icon: <FiAward size={32} style={{ color: 'var(--accent)' }} />
    },
    {
        title: "Compromiso Social",
        description: "El 20% de nuestros beneficios se destina a la investigación contra adicciones.",
        icon: <FiHeart size={32} style={{ color: 'var(--accent)' }} />
    },
    {
        title: "Certificación ISO 27001",
        description: "Privacidad absoluta certificada. Cero recolección de datos personales, siempre.",
        icon: <FiShield size={32} style={{ color: 'var(--accent)' }} />
    }
]; 