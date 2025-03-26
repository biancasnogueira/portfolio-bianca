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
    <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-5">
      <h3 className="text-2xl font-bold text-white/70 w-full text-left">
        {props.titulo}
      </h3>

      <div className="w-full relative group">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Controles posicionados dentro do Carousel mas fora do Content */}
          <div className="hidden sm:flex absolute -left-14 -right-14 top-1/2 -translate-y-1/2 justify-between z-10">
            <CarouselPrevious className="static translate-y-0 bg-black/30 hover:bg-black/50" />
            <CarouselNext className="static translate-y-0 bg-black/30 hover:bg-black/50" />
          </div>

          <CarouselContent className="-ml-1">
            {props.lista.map((projeto) => (
              <CarouselItem
                key={projeto.id}
                className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1 h-full">
                  <ItemProjeto
                    projeto={projeto}
                    className="h-full aspect-square"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}