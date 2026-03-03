/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type { Seguro } from "../../../models/Seguro";
import { buscar } from "../../../services/Service";
import CardSeguro from "../cardseguro/CardSeguro";
import { ToastAlerta } from "../../../utils/ToastAlerta";

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
    } catch (error) {
      ToastAlerta('Erro ao buscar Seguro', 'erro')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0F3B5F] py-12 px-4">

 
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-2">
          Painel de Apólices
        </p>
        <h1 className="text-4xl font-bold text-white mb-3">
          Lista de Seguros
        </h1>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
        <p className="text-slate-200 text-sm max-w-md mx-auto">
          Gerencie e visualize todas as apólices cadastradas no sistema.
        </p>
      </div>


      {isLoading && (
        <div className="flex justify-center w-full my-16">
          <SyncLoader color="#D4AF37" size={14} />
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col">

     
        {(!isLoading && seguros.length === 0) && (
          <div className="flex flex-col items-center justify-center my-16 gap-3">
            <span className="text-4xl">📋</span>
            <span className="text-xl text-slate-300 text-center">
              Nenhum seguro foi encontrado!
            </span>
          </div>
        )}


        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
        ">
          {seguros.map((seguro) => (
            <CardSeguro
              key={seguro.id}
              seguro={seguro}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default ListaSeguros