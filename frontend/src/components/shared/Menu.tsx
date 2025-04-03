"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Menu() {
    const caminho = usePathname()

    const handleScrollToContact = (e: React.MouseEvent) => {
        // Se não estiver na página inicial, primeiro navega para a home
        if (caminho !== "/") {
            window.location.href = "/#contato"
            return
        }
        
        // Se já estiver na home, faz o scroll suave
        e.preventDefault()
        const contactSection = document.getElementById('contato')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selecionado={caminho === "/"}>
                Início
            </MenuItem>
            <MenuItem href="/#sobre-mim" selecionado={caminho.startsWith("/sobre-mim")}>
                Quem sou eu?
            </MenuItem>
            <MenuItem href="/#projetos" selecionado={caminho.startsWith("/projeto")}>
                Projetos
            </MenuItem>
            <MenuItem
                href="/#contato"
                selecionado={false}
                onClick={handleScrollToContact}
            >
                Contato
            </MenuItem>
        </nav>
    )
}

// Atualizei a tipagem para incluir onClick
function MenuItem(props: {
    href: string
    children: React.ReactNode
    selecionado: boolean
    novaAba?: boolean
    onClick?: (e: React.MouseEvent) => void
}) {
    return (
        <Link 
            href={props.href} 
            target={props.novaAba ? "_blank" : "_self"}
            onClick={props.onClick}
        >
            <span
                className={`
                    flex items-center gap-2 text-sm border-[#521797] hover:text-white
                    ${props.selecionado ? "border-b-4 text-white" : "text-zinc-300"}    
                `}
            >
                {props.children}
            </span>
        </Link>
    )
}
