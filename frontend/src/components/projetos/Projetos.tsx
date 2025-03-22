import { Projeto } from "@core";
import ItemProjeto from "./ItemProjeto";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";

export interface ProjetosProps {
	titulo: string;
	lista: Projeto[];
}

export default function Projetos(props: ProjetosProps) {
	return (
		<div className="flex flex-col items-center sm:items-start w-full max-w-7xl mx-auto gap-5 px-4 sm:px-6 lg:px-8 overflow-hidden">
			<h3 className="text-2xl font-bold text-white/70">{props.titulo}</h3>
			<Carousel
				opts={{
					align: "center",
					loop: true,
				}}
				className="w-full"
			>
				<CarouselContent className="flex">
					{props.lista.map((projeto) => (
						<CarouselItem
							key={projeto.id}
							className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
						>
							<ItemProjeto projeto={projeto} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}