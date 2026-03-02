import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import type { Seguro } from "../../../models/Seguro"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarSeguro() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [seguro, setSeguro] = useState<Seguro>({} as Seguro)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/seguros/${id}`, setSeguro)
        } catch {
            ToastAlerta("Erro ao buscar Seguro", "erro")
        }
    }


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarSeguro() {
        setIsLoading(true)

        try {
            await deletar(`/seguros/${id}`)

            ToastAlerta('Seguro apagada com sucesso', 'sucesso')

        } catch {
            ToastAlerta("Erro ao deletar Seguro", "erro")
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/seguros")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Seguro</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o seguro a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Seguro
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{seguro.titulo}</p>
                    <p>{seguro.texto}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarSeguro}>

                        { isLoading ? 
                            <ClipLoader 
                                color="#ffffff" 
                                size={24}
                            /> : 
                            <span>Sim</span>
                        }
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarSeguro