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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">

        <div className="w-full max-w-xl">

        <h1 className="text-4xl font-bold text-[#0F3B5F] text-center mb-6 tracking-wide">
            Deletar Seguro
        </h1>

        <p className="text-center text-slate-600 mb-8">
            Você tem certeza de que deseja apagar o seguro a seguir?
        </p>

        <div className="
            bg-white
            rounded-2xl
            shadow-xl
            border border-slate-200
            overflow-hidden
        ">

            {/* Header */}
            <div className="bg-[#0F3B5F] text-white px-6 py-4">
            <h2 className="text-lg font-semibold tracking-wide">
                Confirmação de Exclusão
            </h2>
            </div>

            {/* Body */}
            <div className="p-6 space-y-2">
            <p className="text-xl font-bold text-[#0F3B5F]">
                {seguro?.numero_apolice}
            </p>

            <p className="text-slate-600">
                {seguro?.cobertura}
            </p>
            </div>

            {/* Footer */}
            <div className="flex border-t border-slate-200">

            <button
                className="
                w-full
                py-3
                font-semibold
                text-slate-600
                hover:bg-slate-100
                transition-all
                duration-200
                "
                onClick={retornar}
            >
                Cancelar
            </button>

            <button
                className="
                w-full
                py-3
                font-semibold
                text-white
                bg-red-600
                hover:bg-red-700
                transition-all
                duration-200
                flex
                items-center
                justify-center
                "
                onClick={deletarSeguro}
            >
                {isLoading ? (
                <ClipLoader
                    color="#ffffff"
                    size={20}
                />
                ) : (
                <span>Confirmar Exclusão</span>
                )}
            </button>

            </div>

        </div>

        </div>

    </div>
    )
}

export default DeletarSeguro