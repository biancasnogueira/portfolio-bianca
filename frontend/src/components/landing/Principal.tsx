import { Tecnologia } from "@core"
import Cabecalho from "../shared/Cabecalho"
import Tecnologias from "../tecnologias/Tecnologias"
import Image from "next/image"

export interface PrincipalProps {
	tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
	return (
		<div
			className="
        flex flex-col items-center justify-center h-[500px]
        bg-[url('/principal.jpg')] bg-cover bg-center
      "
		>
			<Cabecalho />
			<div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center gap-1">
					<div className="animate-float relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
						<Image
							src="/minha-foto.png"
							alt="Bianca Nogueira - Desenvolvedora Front-End"
							fill
							priority
							sizes="(max-width: 768px) 80vw, 40vw"
							className="rounded-full object-cover border-2 border-[#521797] shadow-lg hover:animate-pulse"
							quality={85}
						/>
					</div>
					<h1 className="flex gap-3 items-center">
						<span className="w-2 h-2 rounded-full bg-[#521797]"></span>
						<span className="text-3xl sm:text-4xl font-bold text-center">
							Bianca Nogueira
						</span>
						<span className="w-2 h-2 rounded-full bg-[#521797]"></span>
					</h1>
					<h2 className="text-zinc-500 text-center">&lt;Desenvolvedora Front-End/&gt;</h2>
				</div>
				<Tecnologias lista={props.tecnologias} />
			</div>
		</div>
	)
}
