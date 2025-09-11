import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
    className?: string;
    primaryTitle?: boolean;  // Nueva prop para controlar el color del título
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ 
    id, 
    title, 
    description, 
    children, 
    className = "",
    primaryTitle = false 
}: React.PropsWithChildren<Props>) => {
    return (
        <section id={id} className={`py-10 lg:py-40 ${className}`}>
            <SectionTitle style={primaryTitle ? { color: 'var(--primary)' } : {}}>
                <h2 className="text-center mb-2 text-balance">{title}</h2>
            </SectionTitle>
            <p className="mb-12 text-center max-w-2xl mx-auto text-balance" style={{ color: 'var(--text-strong)' }}>
                {description}
            </p>
            {children}
        </section>
    )
}

export default Section