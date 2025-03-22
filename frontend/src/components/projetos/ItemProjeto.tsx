import { Projeto } from "@core";
import Image from "next/image";
import Link from "next/link";

export interface ItemProjetoProps {
	projeto: Projeto;
}

export default function ItemProjeto(props: ItemProjetoProps) {
	return (
		<Link href={`/projeto/${props.projeto.id}`}>
			<div
				className="
					relative rounded-2xl overflow-hidden border border-zinc-800
					w-full h-48 sm:h-56 md:h-64 lg:h-72
				"
			>
				<Image
					src={props.projeto.imagens[0]}
					alt={props.projeto.nome}
					fill
					className="object-cover"
				/>
			</div>
		</Link>
	);
}