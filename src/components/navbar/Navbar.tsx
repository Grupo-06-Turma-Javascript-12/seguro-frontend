import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
      <div className="w-full flex justify-center py-4 text-white shadow-lg" style={{ backgroundColor: '#0F3B5F' }}>
        <div className="container flex justify-between items-center text-lg mx-8">
          <Link to='/home'>
            <img 
              src="https://ik.imagekit.io/ycn9hqmaw/image%20(3).png?updatedAt=1772461806088" 
              alt="ELO Seguros" 
              className="h-10 object-contain"
            />
          </Link>

          <div className="flex gap-2">
            <Link to='/seguros' className="px-4 py-2 rounded-full border border-transparent hover:bg-white/10 transition-all duration-200 text-slate-200 hover:text-white">
              Seguros
            </Link>
            <Link to='/categorias' className="px-4 py-2 rounded-full border border-transparent hover:bg-white/10 transition-all duration-200 text-slate-200 hover:text-white">
              Categorias
            </Link>
            <Link to='/cadastrarcategoria' className="px-4 py-2 rounded-full font-semibold border-2 transition-all duration-200"
              style={{ borderColor: '#D4AF37', color: '#D4AF37', backgroundColor: 'transparent' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#D4AF37', e.currentTarget.style.color = '#0F3B5F')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent', e.currentTarget.style.color = '#D4AF37')}>
              Cadastrar Categoria
            </Link>
            <Link to='/sobrenos' className="px-4 py-2 rounded-full border border-transparent hover:bg-white/10 transition-all duration-200 text-slate-200 hover:text-white">
              Sobre Nós
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar