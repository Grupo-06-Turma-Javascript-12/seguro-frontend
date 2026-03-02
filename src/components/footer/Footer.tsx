import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Footer() {

  const data = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      
      {/* CONTEÚDO PRINCIPAL */}
      <div className="container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LOGO + DESCRIÇÃO */}
        <div className="flex flex-col gap-4">
          <img
            src="https://ik.imagekit.io/ycn9hqmaw/image%20(3).png?updatedAt=1772461806088"
            alt="ELO Seguros"
            className="h-10 object-contain object-left"
          />
          <p className="text-slate-400 text-sm leading-relaxed">
            Conectando você à segurança que realmente importa.
          </p>
          <div className="flex gap-3 mt-2">
            <LinkedinLogoIcon size={28} weight="bold" className="text-slate-400 hover:text-[#D4AF37] cursor-pointer transition-colors duration-200" />
            <InstagramLogoIcon size={28} weight="bold" className="text-slate-400 hover:text-[#D4AF37] cursor-pointer transition-colors duration-200" />
            <FacebookLogoIcon size={28} weight="bold" className="text-slate-400 hover:text-[#D4AF37] cursor-pointer transition-colors duration-200" />
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Navegação</p>
          <Link to="/home" className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-200">Home</Link>
          <Link to="/seguros" className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-200">Seguros</Link>
          <Link to="/categorias" className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-200">Categorias</Link>
          <Link to="/sobrenos" className="text-slate-300 hover:text-[#D4AF37] transition-colors duration-200">Sobre Nós</Link>
        </div>

        {/* CONTATO */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Contato</p>
          <p className="text-slate-300 text-sm">✉ grupo06turmajavascript12@gmail.com</p>
          <p className="text-slate-300 text-sm">📍 Recife, PE</p>
        </div>

      </div>

      {/* RODAPÉ INFERIOR */}
      <div className="border-t border-slate-700 py-4 px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-2">
          <p>© ELO Seguros {data} — Todos os direitos reservados.</p>
          <p>Feito com ❤️ pelo Grupo 06 · Turma JavaScript 12</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer