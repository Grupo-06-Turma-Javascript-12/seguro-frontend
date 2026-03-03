import { Link } from 'react-router-dom'
import type { Categoria } from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className='
      bg-white
      rounded-2xl
      shadow-md
      hover:shadow-xl
      transition-all duration-300
      border border-slate-200
      flex flex-col
      justify-between
      overflow-hidden
    '>

      {/* HEADER */}
      <div className='
        bg-[#0F3B5F]
        text-white
        px-6 py-4
        flex items-center justify-between
      '>
        <h2 className='text-lg font-semibold tracking-wide'>
          Categoria
        </h2>

        <span className='
          text-xs
          font-semibold
          px-3 py-1
          rounded-full
          bg-[#D4AF37]
          text-[#0F3B5F]
        '>
          ID {categoria.id}
        </span>
      </div>

      {/* BODY */}
      <div className='p-8 flex items-center justify-center'>
        <p className='
          text-2xl
          font-bold
          text-[#0F3B5F]
          text-center
          tracking-wide
        '>
          {categoria.descricao}
        </p>
      </div>

      {/* FOOTER */}
      <div className="flex border-t border-slate-200">

        <Link
          to={`/editarcategoria/${categoria.id}`}
          className='
            w-full
            text-center
            py-3
            font-semibold
            text-[#0F3B5F]
            hover:bg-[#0F3B5F]
            hover:text-white
            transition-colors duration-200
          '
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className='
            w-full
            text-center
            py-3
            font-semibold
            text-red-600
            hover:bg-red-600
            hover:text-white
            transition-colors duration-200
          '
        >
          Deletar
        </Link>

      </div>
    </div>
  )
}

export default CardCategoria