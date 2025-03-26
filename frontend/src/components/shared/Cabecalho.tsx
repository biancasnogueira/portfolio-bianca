import Image from "next/image"
import Container from "./Container"
import Link from "next/link"
import Menu from "./Menu"

export default function Cabecalho() {
  return (
    <header className="w-full flex items-center h-16 bg-black/50">
      <Container className="flex-1 flex justify-center sm:justify-between items-center">
        <div className="flex items-center gap-10">
          <Link 
            href="/" 
            className="hidden sm:block transform translate-y-[-25px] transition-all duration-300 hover:brightness-75"
          >
            <Image
              src="/logo.webp"
              alt="Logo"
              width={220}
              height={40}
              className="object-contain brightness-200" // Brilho normal por padrão
            />
          </Link>
          <Menu />
        </div>
        <div className="hidden sm:flex items-center">
          <Link
            href="https://www.linkedin.com/in/biancasilvanogueira/"
            target="_blank"
            className="bg-[#521797] rounded-full px-7 py-1 text-sm font-bold"
          >
            Perfil
          </Link>
        </div>
      </Container>
    </header>
  )
}