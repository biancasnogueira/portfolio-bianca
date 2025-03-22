import React from "react";

// Definindo a interface para as props
export interface ContainerProps {
    children: React.ReactNode; // Conteúdo do container
    className?: string; // Classes CSS adicionais (opcional)
}

// Componente Container
export default function Container({ children, className }: ContainerProps) {
    return (
        <div className={`max-w-7xl mx-auto px-4 ${className ?? ""}`}>
            {children}
        </div>
    );
}