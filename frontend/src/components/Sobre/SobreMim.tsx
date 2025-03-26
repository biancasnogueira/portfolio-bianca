import Image from "next/image"

export default function SobreMim() {
	return (
		<div className="flex justify-center items-center min-h-[50vh] py-8 px-4">
			<div className="max-w-3xl mx-auto">
				<div className="flex flex-col gap-6 items-center text-center">
					<div>
						<span className="text-2xl font-bold">Sobre mim</span>
					</div>
					<p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
						Desenvolvedora Fullstack com expertise em HTML, CSS, JavaScript, React e
						MySQL, especializada em criar soluções web e mobile modernas e eficientes.
						Formada em Análise e Desenvolvimento de Sistemas, aplico metodologias ágeis
						para entregar projetos alinhados às necessidades do negócio, desde sites até
						sistemas complexos.
					</p>
				</div>
			</div>
		</div>
	)
}
