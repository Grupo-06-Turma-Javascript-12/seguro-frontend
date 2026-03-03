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
          Lista de Categorias
        </h1>

        {(!isLoading && categoria.length === 0) && (
          <span className="text-2xl text-center text-slate-600 my-8">
            Nenhuma categoria foi encontrada!
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