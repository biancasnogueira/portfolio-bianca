"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Experiencia() {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-around gap-6 p-6 bg-black border border-zinc-800 rounded-2xl">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // Deixar "once: false"
      >
        <Item principal="+100" label="clientes atendidos" />
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }} // Deixar "once: false"
      >
        <Item principal="+2" label="anos de experiência" />
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }} // Deixar "once: false"
      >
        <Item principal="+50" label="projetos entregues" />
      </motion.div>
    </div>
  )
}

function Item(props: { principal: string; label: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Função para reiniciar a contagem sempre que o item for visível
    const startCount = () => {
      let endValue = parseInt(props.principal.replace("+", "")) // obter o valor final da contagem
      let startValue = 0
      setCount(0) // Reseta a contagem quando o item for visível

      const interval = setInterval(() => {
        if (startValue < endValue) {
          startValue++
          setCount(startValue)
        } else {
          clearInterval(interval)
        }
      }, 10)
    }

    if (isVisible) {
      startCount() // Inicia a contagem quando visível
    }

  }, [isVisible, props.principal])

  // Detectar se o componente está visível na tela
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true) // Inicia a contagem quando a seção entra em vista
      } else {
        setIsVisible(false) // Reseta a contagem quando sai da tela
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Aciona quando 50% do item estiver visível
    })

    const element = document.getElementById(props.label)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [props.label])

  return (
    <div
      className="flex flex-col items-center hover:scale-105 hover:shadow-lg hover:text-[#521797] transition-all duration-300 ease-in-out"
      id={props.label}
    >
      <motion.span
        className="text-[#521797] text-3xl font-bold leading-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        +{count}
      </motion.span>
      <span className="text-zinc-400 text-sm text-center">{props.label}</span>
    </div>
  )
}
