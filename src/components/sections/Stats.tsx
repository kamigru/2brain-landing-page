import { stats } from "@/data/stats"

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-10 lg:py-20">
            <div className="grid sm:grid-cols-3 gap-8">
                {stats.map(stat => (
                    <div key={stat.title} className="text-center sm:text-left max-w-md sm:max-w-full mx-auto">
                        <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start text-white">
                            {stat.icon}
                            {stat.title}
                        </h3>
                        <p className="text-gray-300">
                            {stat.title === "60%" && (
                                <>De usuarios <span className="font-semibold text-white">reducen la frecuencia del impulso</span> en 30 días según <span className="font-semibold text-white">validación científica</span>.</>
                            )}
                            {stat.title === "100%" && (
                                <><span className="font-semibold text-white">Privacidad garantizada</span>. Cero recolección de datos personales, siempre.</>
                            )}
                            {stat.title === "20%" && (
                                <>De nuestros beneficios se destinan a <span className="font-semibold text-white">investigación contra adicciones</span>.</>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats