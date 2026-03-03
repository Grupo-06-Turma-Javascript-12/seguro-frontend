import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type { Seguro } from "../../../models/Seguro";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardSeguro from "../cardseguro/CardSeguro";

function ListaSeguros() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [seguros, setSeguros] = useState<Seguro[]>([])

    useEffect(() => {
        buscarSeguros()    
    }, [seguros.length])

    async function buscarSeguros() {
        try {

            setIsLoading(true)
            await buscar('/seguros', setSeguros)

        } catch {
            ToastAlerta("Erro ao buscar Seguro", "erro")

        } finally {
            setIsLoading(false)
        }
    }

    return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">

        {isLoading && (
            <div className="flex justify-center w-full my-8">
                <SyncLoader
                    color="#0F3B5F"
                    size={16}
                />
            </div>
        )}

        <div className="max-w-7xl mx-auto flex flex-col">

            <h1 className="text-4xl font-bold text-[#0F3B5F] mb-10 text-center tracking-wide">
                Lista de Seguros
            </h1>

            {(!isLoading && seguros.length === 0) && (
                <span className="text-2xl text-center text-slate-600 my-8">
                    Nenhum Seguro foi encontrado!
                </span>
            )}

            <div className="
                grid 
                grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4
                gap-8
            ">
                {seguros.map((seguro) => (
                    <CardSeguro key={seguro.id} seguro={seguro}/>
                ))}
            </div>

        </div>
    </div>
    )
}
export default ListaSeguros;