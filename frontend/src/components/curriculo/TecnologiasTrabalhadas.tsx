"use client";

import { Tecnologia } from "@core";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface TecnologiasTrabalhadasProps {
	lista: Tecnologia[];
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true }); // Dispara só uma vez ao entrar na tela

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1, // Atraso entre cada hashtag
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 10, scale: 0.9 },
		show: { opacity: 1, y: 0, scale: 1 },
	};

	return (
		<div ref={ref} className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl relative overflow-hidden">
			{/* Fundo Animado */}
			<div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-black to-purple-800 animate-[pulse_5s_infinite] opacity-20"></div>

			{/* Só anima quando estiver visível */}
			<motion.div 
				className="flex justify-center gap-x-3 flex-wrap relative z-10"
				variants={container}
				initial="hidden"
				animate={isInView ? "show" : "hidden"}
			>
				{props.lista.map((tecnologia) => (
					<motion.div 
						key={tecnologia.id} 
						variants={item}
						whileHover={{ scale: 1.2, rotate: 3 }}
						className="transition-all duration-300"
					>
						<span className="text-[#521797] font-bold drop-shadow-lg">#</span>
						<span className="text-white transition-all duration-300 hover:text-[#c084fc] hover:drop-shadow-[0_0_8px_#c084fc]">
							{tecnologia.nome}
						</span>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
