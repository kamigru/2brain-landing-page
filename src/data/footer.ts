import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Tu asistente personal de autoayuda con inteligencia artificial. Alcanza tus objetivos y mejora tu bienestar con la guía de tu coach de IA disponible 24/7.",
    quickLinks: [
        {
            text: "Características",
            url: "#features"
        },
        {
            text: "Confianza",
            url: "#confianza"
        },
        {
            text: "Testimonios",
            url: "#testimonios"
        }
    ],
    email: 'contacto@2brain.app',
    telephone: '+34 (900) 123-456',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/2brainapp',
        facebook: 'https://facebook.com/2brainapp',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/company/2brain',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/2brainapp',
    }
}