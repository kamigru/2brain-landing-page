import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Transformando el impulso en autocontrol medible mediante psicología basada en evidencia y privacidad absoluta.",
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
    email: 'contacto@hopebox.com',
    telephone: '+34 (900) 123-456',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/HopeBoxOfficial',
        facebook: 'https://facebook.com/HopeBoxOfficial',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/company/hopebox',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/hopeboxofficial',
    }
}