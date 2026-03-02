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
    <>
      {isLoading && (
        <SyncLoader
          color="#312e81"
          size={32}
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {(!isLoading && categoria.length === 0) && (
            <span className="text-3xl text-center my-8">
              Nenhuma categoria foi encontrada!
            </span>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategorias