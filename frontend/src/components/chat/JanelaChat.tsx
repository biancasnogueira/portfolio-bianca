"use client"
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import { IconMessages, IconReload, IconSend } from "@tabler/icons-react"
import useChat from "@/hooks/useChat"
import BalaoMensagem from "./BalaoMensagem"
import Image from "next/image"

export default function JanelaChat() {
  const { mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
  const [texto, setTexto] = useState("")
  const fimChatRef = useRef<HTMLDivElement>(null)

  function enviarMensagem() {
    adicionarMensagem(texto)
    setTexto("")
  }

  useEffect(() => {
    fimChatRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [mensagens])

  useEffect(() => {
	if (typeof window !== 'undefined') {
	  const handleResize = () => {
		fimChatRef.current?.scrollIntoView({ behavior: 'smooth' });
	  };
  
	  window.visualViewport?.addEventListener('resize', handleResize);
	  
	  // Função de limpeza (não retorna JSX)
	  return () => {
		window.visualViewport?.removeEventListener('resize', handleResize);
	  };
	}
  }, []);

  return (
    <div className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden w-[92vw] max-w-[360px] h-[75vh] max-h-[600px] mx-auto">
      {/* Cabeçalho compacto para mobile */}
      <div className="flex justify-between items-center bg-white p-3">
        <h2 className="text-lg font-bold">Olá Visitante!</h2>
        <IconReload
          size={20}
          className="text-black cursor-pointer"
          onClick={limparMensagens}
        />
      </div>

      {/* Área de mensagens otimizada */}
      {mensagens.length === 0 ? (
        <div className="flex flex-col justify-center items-center flex-1 min-h-[200px]">
          <IconMessages size={100} stroke={0.2} className="text-black/30" />
          <span className="text-sm mt-2">Vamos conversar?</span>
        </div>
      ) : (
        <div className="flex flex-col p-2 gap-2 flex-1 overflow-y-auto min-h-[200px]">
          {mensagens.map((mensagem, i) => {
            const mesmoAutor = i > 0 && mensagens[i - 1].autor === mensagem.autor
            return (
              <BalaoMensagem
                key={mensagem.id}
                mensagem={mensagem}
                omitirAutor={mesmoAutor}
              />
            )
          })}
          {pensando && (
            <Image 
              src="/pensando.gif" 
              alt="Pensando" 
              width={40} 
              height={40}
              className="w-8 h-8"
            />
          )}
          <div ref={fimChatRef}></div>
        </div>
      )}

      {/* Input otimizado para touch */}
      <div className="flex items-center gap-2 p-1 mx-3 my-2 rounded-full bg-white">
        <input
          type="text"
          value={texto}
          className="flex-1 bg-transparent h-8 outline-none pl-3 text-sm"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTexto(e.target.value)
          }}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") enviarMensagem()
          }}
          placeholder="Digite sua mensagem..."
        />
        <button
          className="flex justify-center cursor-pointer items-center h-8 w-8 min-w-[32px] rounded-full bg-[#521797]"
          onClick={enviarMensagem}
        >
          <IconSend className="text-white" size={16} />
        </button>
      </div>
    </div>
  )
}