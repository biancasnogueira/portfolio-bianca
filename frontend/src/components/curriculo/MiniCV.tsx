"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function MiniCV() {
	// Detecta quando a seção entra na tela
	const { ref, inView } = useInView({
		triggerOnce: false, // Sempre anima ao entrar na tela
		threshold: 0.2, // Ativa quando 20% da seção estiver visível
	})

	return (
		<motion.div
			ref={ref}
			className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6 relative overflow-hidden"
			initial={{ opacity: 0, y: 80 }}
			animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
			transition={{ duration: 1.2, ease: "easeOut" }}
		>
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image src="/minha-foto.png" alt="Foto de perfil" fill />
			</div>

			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<motion.span
						className="bg-gradient-to-r from-[#521797] via-white to-white text-transparent bg-clip-text text-2xl font-bold"
						initial={{ opacity: 0, x: -50 }}
						animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 1, delay: 0.4 }}
					>
						Bianca Nogueira
					</motion.span>
					<span>Desenvolvedora Fullstack e Analista de Sistemas</span>
				</div>

				<motion.p
					className="text-sm text-center md:text-left lg:text-center xl:text-left"
					initial={{ opacity: 0, x: 50 }}
					animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
					transition={{ duration: 1.2, delay: 0.6 }}
				>
					Desenvolvedora Fullstack especializada em criar sites, sistemas e aplicativos
					que impulsionam negócios. Com expertise em HTML, CSS, JavaScript, React e MySQL,
					desenvolvo soluções modernas, responsivas e sob medida para atender às suas
					necessidades. Seja um site institucional, um sistema de gestão ou um app mobile,
					posso transformar sua ideia em uma solução tecnológica eficiente e de alto impacto.
				</motion.p>
			</div>
		</motion.div>
	)
}
