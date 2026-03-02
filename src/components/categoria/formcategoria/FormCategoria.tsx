import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategorias() {

  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>();

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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategorias({
      ...categorias,
      [e.target.name]: e.target.value
    })
  }

  function retornar() {
    navigate("/categorias")
  }

  async function gerarNovoCategorias(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categorias, setCategorias)
        alert('O Categorias foi atualizado com sucesso!')
      } catch (error) {
        alert('Erro ao atualizar o categorias.')
      }
    } else {
      try {
        await cadastrar(`/categoria`, categorias, setCategorias)
        alert('O Categorias foi cadastrado com sucesso!')
      } catch (error) {
        alert('Erro ao cadastrar o categorias.')
      }
    }

    setIsLoading(false)
    retornar()
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastrar Categorias' : 'Editar Categorias'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategorias}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do Categorias</label>
          <input
            type="text"
            placeholder="Descreva aqui seu categorias"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categorias.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          className="rounded text-slate-100 bg-indigo-400 
                     hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit">
          {isLoading ?
            <ClipLoader color="#ffffff" size={24} /> :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default FormCategorias;