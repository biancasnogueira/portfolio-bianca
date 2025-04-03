"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function DiferencaPrecoValor() {
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.2,
	})

	return (
		<motion.section
			ref={ref}
			className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-16 border border-zinc-800 rounded-2xl overflow-hidden  bg-black"
			initial={{ y: 50 }}
			animate={inView ? { y: 0 } : { y: 50 }}
			transition={{ duration: 1.2, ease: "easeOut" }}
		>
			{/* Fundo animado */}
			<div className=""></div>

			{/* Texto */}
			<div className="max-w-lg text-center md:text-left relative z-10">
				<motion.h2
					className="text-3xl font-bold text-white"
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
				>
					Preço ou Valor? O que realmente importa para o seu negócio?
				</motion.h2>

				<motion.p
					className="mt-4 text-gray-300"
					initial={{ opacity: 0}}
					animate={inView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					Um site barato pode afastar clientes. Já um site profissional te ajuda a vender
					mais e crescer.<br/> Qual você prefere?
				</motion.p>

				<motion.a
					href="#contato"
					className="inline-block mt-6 px-6 py-3 bg-[#521797] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.8, delay: 0.7 }}
				>
					Fale comigo →
				</motion.a>
			</div>

			{/* Imagens Comparativas Flutuantes */}
			<div className="relative max-w-lg">
				{/* Imagem central (Laptop) */}
				<motion.div
					className="relative z-10 -left-20 right-25 top-12 w-64"
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 1, delay: 0.6 }}
				>
					<Image
						src="/notebook-mock-2.webp"
						alt="Site profissional"
						width={500}
						height={300}
						className=""
					/>
				</motion.div>

				{/* Imagem flutuante esquerda (Tablet) */}
				<motion.div
					className="absolute z-20 left-25 top-10 w-64 animate-float"
				>
					<Image
						src="/tablet-mock-2.webp"
						alt="Site profissional"
						width={180}
						height={180}
						className=""
					/>
				</motion.div>

{/* Imagem flutuante iPhone */}
<motion.div
	className="absolute -left-2 top-8 -bottom-2 w-36  animate-float"
>
	<Image
		src="/iphone-mock-2.webp"
		alt="Site barato e ruim"
		width={100}
		height={100}
		className="brightness-100"
	/>
</motion.div>
			</div>
		</motion.section>
	)
}
