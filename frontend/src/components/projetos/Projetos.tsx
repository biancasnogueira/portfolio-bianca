import { Projeto } from "@core"
import ItemProjeto from "./ItemProjeto"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"

export interface ProjetosProps {
	titulo: string
	lista: Projeto[]
}

export default function Projetos(props: ProjetosProps) {
	return (
		<div id="projetos" className="flex flex-col items-center sm:items-start w-8/10 md:w-11/12 xl:w-full gap-5">
			<h3 className="text-2xl font-bold text-white/70 w-full text-left">{props.titulo}</h3>

			<div className="w-full relative group">
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full"
				>
					<CarouselContent className="-ml-1">
						{props.lista.map((projeto) => (
							<CarouselItem
								key={projeto.id}
								className="pl-1 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/4"
							>
								<div className="p-1 h-full">
									<ItemProjeto
										projeto={projeto}
										className="h-full aspect-square max-w-full sm:max-w-[70%] md:max-w-[90%] lg:max-w-full"
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="bg-black/30 hover:bg-black/80 h-12 w-12 sm:h-8 sm:w-8" />
					<CarouselNext className="bg-black/30 hover:bg-black/80 h-12 w-12 sm:h-8 sm:w-8" />
				</Carousel>
			</div>
		</div>
	)
}
