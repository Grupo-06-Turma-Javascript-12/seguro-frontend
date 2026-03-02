import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type { Seguro } from "../../../models/Seguro";
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

        } catch {
            ToastAlerta("Erro ao buscar Seguro", "erro")

        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>

            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">

                    {(!isLoading && seguros.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhum Seguro foi encontrado!
                            </span>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-4 px-4 gap-8">
                            {
                                seguros.map((seguro) => {
                                    console.log("Seguro:", seguro);

                                    return (
                                    <CardSeguro key={seguro.id} seguro={seguro}/>
                                )})
                            }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaSeguros;