import CardCategorias from "../cardcategoria/CardCategoria";
import { SyncLoader } from "react-spinners";
import { useState, useEffect } from "react";
import type { Categoria } from "../../../models/Categoria";
import { buscar } from "../../../services/Service";

function ListaCategorias() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categorias, setCategoriass] = useState<Categoria[]>([])

  useEffect(() => {
    buscarCategoriass()
  }, [categorias.length])

  async function buscarCategoriass() {
  try {
    setIsLoading(true)
    await buscar('/categorias', setCategoriass)
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
          {(!isLoading && categorias.length === 0) && (
            <span className="text-3xl text-center my-8">
              Nenhum Categorias foi encontrado!
            </span>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categorias) => (
              <CardCategorias key={categorias.id} categoria={categorias} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategorias