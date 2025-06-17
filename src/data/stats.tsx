import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "60%",
        icon: <BsBarChartFill size={34} className="text-secondary" />,
        description: "De usuarios reducen la frecuencia del impulso en 30 días según validación científica."
    },
    {
        title: "100%",
        icon: <BsFillStarFill size={34} className="text-secondary" />,
        description: "Privacidad garantizada. Cero recolección de datos personales, siempre."
    },
    {
        title: "20%",
        icon: <PiGlobeFill size={34} className="text-secondary" />,
        description: "De nuestros beneficios se destinan a investigación contra adicciones."
    }
];