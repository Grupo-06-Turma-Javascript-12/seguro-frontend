import { Link } from "react-router-dom"

function Navbar() {

  return (
    <nav className="w-full bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to='/home'>
          <img 
            src="https://ik.imagekit.io/ycn9hqmaw/image%20(3).png?updatedAt=1772461806088" 
            alt="ELO Seguros" 
            className="h-10 object-contain"
          />
        </Link>

        {/* LINKS */}
        <div className="flex gap-2 items-center">
          <Link to='/seguros' className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200">
            Seguros
          </Link>
          <Link to='/categorias' className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200">
            Categorias
          </Link>
          <Link to='/sobrenos' className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200">
            Sobre Nós
          </Link>
          <Link to='/cadastrarcategoria'
            className="px-4 py-2 rounded-full font-semibold border-2 transition-all duration-200"
            style={{ borderColor: '#D4AF37', color: '#D4AF37', backgroundColor: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#D4AF37'; e.currentTarget.style.color = '#0F3B5F' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#D4AF37' }}>
            Cadastrar Categoria
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar