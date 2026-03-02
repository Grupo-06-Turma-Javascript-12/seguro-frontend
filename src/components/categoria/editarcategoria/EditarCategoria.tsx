import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import { buscar, atualizar } from "../../../services/Service";

function EditarCategoria() {

  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  function retornar() {
    navigate("/categorias")
  }

  async function editarCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    try {
      await atualizar(`/categorias`, categoria, setCategoria)
      alert('Categoria atualizada com sucesso!')
      retornar()
    } catch (error) {
      alert('Erro ao atualizar a categoria.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        Editar Categoria
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={editarCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descreva aqui sua categoria"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          className="rounded text-slate-100 bg-indigo-400 
                     hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit">
          {isLoading ?
            <ClipLoader color="#ffffff" size={24} /> :
            <span>Atualizar</span>
          }
        </button>
      </form>
    </div>
  );
}

export default EditarCategoria;