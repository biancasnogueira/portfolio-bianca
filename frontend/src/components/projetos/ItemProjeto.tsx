import { Projeto } from "@core"
import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes } from "react" // Importe o tipo necessário

// Adicione a interface estendendo HTMLAttributes para incluir todas as props de div
export interface ItemProjetoProps extends HTMLAttributes<HTMLDivElement> {
    projeto: Projeto
}

export default function ItemProjeto(props: ItemProjetoProps) {
    return (
        <Link href={`/projeto/${props.projeto.id}`}>
            <div
                {...props} // Espalhe todas as props restantes
                className={`
                    relative rounded-2xl overflow-hidden border border-zinc-800
                    min-w-64 min-h-64 
                    ${props.className || ""} // Adicione a classe recebida por prop
                `}
            >
                <Image
                    src={props.projeto.imagens[0]}
                    alt={props.projeto.nome}
                    fill
                    style={{ objectFit: "cover" }} // Corrigido para a forma atual do Next.js
                />
            </div>
        </Link>
    )
}