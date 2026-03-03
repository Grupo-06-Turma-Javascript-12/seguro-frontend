import { Link } from 'react-router-dom'
import type { Seguro } from '../../../models/Seguro'

interface CardSegurosProps {
    seguro: Seguro
}

function CardSeguro({ seguro }: CardSegurosProps) {
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
            <div className="flex items-center gap-4 
                bg-[#0F3B5F] 
                text-white 
                py-4 px-5">

                <img
                    className='h-14 w-14 rounded-full object-cover border-2 border-[#D4AF37]'
                    src={seguro.usuario?.foto || 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}
                    onError={(e) => e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}
                    alt="Foto do usuário"
                />

                <div>
                    <h3 className='text-lg font-semibold uppercase tracking-wide'>
                        {seguro.usuario?.nome}
                    </h3>
                    <span className='text-sm text-[#D4AF37]'>
                        Titular da apólice
                    </span>
                </div>
            </div>

            {/* BODY */}
            <div className='p-6 space-y-3'>
                <h4 className='text-xl font-bold text-[#0F3B5F]'>
                    {seguro.numero_apolice}
                </h4>

                <p className='text-slate-600'>
                    {seguro.cobertura}
                </p>

                <p className='text-sm'>
                    <span className='font-semibold text-[#0F3B5F]'>
                        Categoria:
                    </span>{' '}
                    <span className='text-slate-600'>
                        {seguro.categoria?.descricao}
                    </span>
                </p>
            </div>

            {/* FOOTER */}
            <div className="flex border-t border-slate-200">

                <Link 
                    to={`/editarseguro/${seguro.id}`}
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
                    to={`/deletarseguro/${seguro.id}`}
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

export default CardSeguro