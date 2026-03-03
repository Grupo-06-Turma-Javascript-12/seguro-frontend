import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardcategoria/CardCategoria";

function ListaCategorias() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categoria, setCategorias] = useState<Categoria[]>([])

  useEffect(() => {
    buscarCategorias()
  }, [categoria.length])

  async function buscarCategorias() {
    try {
      setIsLoading(true)
      await buscar('/categoria', setCategorias)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0F3B5F] py-12 px-4">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-2">
          Planos disponíveis
        </p>
        <h1 className="text-4xl font-bold text-white mb-3">
          Categorias de Seguros
        </h1>
        <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
        <p className="text-slate-200 text-sm max-w-md mx-auto">
          Escolha a categoria ideal para o seu perfil e comece sua proteção hoje mesmo.
        </p>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center w-full my-16">
          <SyncLoader color="#D4AF37" size={14} />
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col">

        {/* Vazio */}
        {(!isLoading && categoria.length === 0) && (
          <div className="flex flex-col items-center justify-center my-16 gap-3">
            <span className="text-4xl">📭</span>
            <span className="text-xl text-slate-300 text-center">
              Nenhuma categoria foi encontrada!
            </span>
          </div>
        )}

        {/* Grid */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
        ">
          {categoria.map((categoria) => (
            <CardCategorias
              key={categoria.id}
              categoria={categoria}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default ListaCategorias