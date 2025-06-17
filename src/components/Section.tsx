import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
    className?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ 
    id, 
    title, 
    description, 
    children, 
    className = "" 
}: React.PropsWithChildren<Props>) => {
    return (
        <section id={id} className={`py-10 lg:py-40 ${className}`}>
            <SectionTitle>
                <h2 className="text-center mb-4 text-balance">{title}</h2>
            </SectionTitle>
            <p className="mb-12 text-center text-readable-secondary max-w-2xl mx-auto text-balance">
                {description}
            </p>
            {children}
        </section>
    )
}

export default Section