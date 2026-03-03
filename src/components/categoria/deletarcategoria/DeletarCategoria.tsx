import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import type { Categoria } from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"

function DeletarCategoria() {

  const navigate = useNavigate()

  const [tema, setCategorias] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategorias)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarCategorias() {
    setIsLoading(true)
    try {
      await deletar(`/categoria/${id}`)
      alert('Categoria apagada com sucesso')
    } catch {
      alert('Erro ao deletar a categoria.')
    } finally {
      setIsLoading(false)
      retornar()
    }
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-6 text-[#0F3B5F] font-bold'>
        Deletar Categoria
      </h1>

      <p className='text-center font-semibold mb-6 text-slate-700'>
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className='border border-[#0F3B5F] flex flex-col rounded-2xl overflow-hidden shadow-md'>

        <header className='py-3 px-6 bg-[#0F3B5F] text-white font-bold text-xl text-center'>
          Categoria
        </header>

        <div className='p-6 bg-slate-50'>
          <p className='text-2xl font-semibold text-center text-[#0F3B5F]'>
            {tema.descricao}
          </p>
        </div>

        <div className="flex">
          <button
            className='w-full py-3 font-semibold text-[#0F3B5F] bg-[#D4AF37] hover:brightness-110 transition duration-200'
            onClick={retornar}
          >
            Não
          </button>

          <button
            className='w-full py-3 font-semibold text-white bg-[#0F3B5F] hover:bg-[#0c2f4a] transition duration-200 flex items-center justify-center'
            onClick={deletarCategorias}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>

      </div>
    </div>
  )
}

export default DeletarCategoria