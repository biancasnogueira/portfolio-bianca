import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image src="/minha-foto.png" alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-[#521797] via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Bianca Nogueira
					</span>
					<span>Desenvolvedora Fullstack e Analista de Sistemas</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Desenvolvedora Fullstack especializada em criar sites, sistemas e aplicativos
					que impulsionam negócios. Com expertise em HTML, CSS, JavaScript, React e MySQL,
					desenvolvo soluções modernas, responsivas e sob medida para atender às suas
					necessidades. Seja um site institucional, um sistema de gestão ou um app mobile,
					posso transformar sua ideia em uma solução tecnológica eficiente e de alto
					impacto. Vamos juntos criar algo que simplifique processos, engaje clientes e
					gere resultados?
				</p>
			</div>
		</div>
	)
}
