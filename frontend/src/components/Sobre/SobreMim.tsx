"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function SobreMim() {
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")

	useEffect(() => {
		let lastScrollY = window.scrollY

		const updateScrollDirection = () => {
			const currentScrollY = window.scrollY
			setScrollDirection(currentScrollY > lastScrollY ? "down" : "up")
			lastScrollY = currentScrollY
		}

		window.addEventListener("scroll", updateScrollDirection)
		return () => window.removeEventListener("scroll", updateScrollDirection)
	}, [])

	return (
		<motion.div
			initial={{ opacity: 0, y: scrollDirection === "down" ? 50 : -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false, amount: 0.3 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="flex justify-center items-center min-h-[50vh] py-8 px-4"
		>
			<div className="max-w-3xl mx-auto">
				<div className="flex flex-col gap-6 items-center text-center">
					<motion.div
						initial={{ scale: 0.9 }}
						whileInView={{ scale: 1 }}
						transition={{ type: "spring", stiffness: 100 }}
					>
						<span className="text-2xl font-bold bg-gradient-to-r from-[#521797] via-[#9b51e0] to-[#521797] bg-clip-text text-transparent">Sobre mim</span>
					</motion.div>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="text-lg leading-relaxed text-gray-400 max-w-2xl"
					>
						Desenvolvedora Fullstack com expertise em HTML, CSS, JavaScript, React e
						MySQL, especializada em criar soluções web e mobile modernas e eficientes.
						Formada em Análise e Desenvolvimento de Sistemas, aplico metodologias ágeis
						para entregar projetos alinhados às necessidades do negócio, desde sites até
						sistemas complexos.
					</motion.p>
				</div>
			</div>
		</motion.div>
	)
}