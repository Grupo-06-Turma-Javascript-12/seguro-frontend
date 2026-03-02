import { Link } from 'react-router-dom'
import type { Seguro } from '../../../models/Seguro'

interface CardSegurosProps {
    seguro: Seguro
}

function CardSeguro({ seguro }: CardSegurosProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img
                        className='h-12 rounded-full border-indigo-400'
                        src={seguro.usuario?.foto || 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}
                        onError={(e) => e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}
                        alt={`foto do Usuário`} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {seguro.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{seguro.numero_apolice}</h4>
                    <p>{seguro.cobertura}</p>
                    <p>Categoria: {seguro.categoria?.descricao}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarseguro/${seguro.id}`} 
                    className='w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarseguro/${seguro.id}`}
                    className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardSeguro