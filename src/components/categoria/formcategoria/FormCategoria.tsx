import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

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
        ToastAlerta('O Categorias foi atualizado com sucesso!', 'sucesso')
      } catch (error) {
        ToastAlerta('Erro ao atualizar o categorias.', 'erro')
      }
    } else {
      try {
        await cadastrar(`/categoria`, categorias, setCategorias)
        ToastAlerta('O Categorias foi cadastrado com sucesso!', 'sucesso')
      } catch (error) {
        ToastAlerta('Erro ao cadastrar o categorias.', 'erro')
      }
    }

    setIsLoading(false)
    retornar()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 py-10 px-4">

      <h1 className="text-4xl font-bold text-[#0F3B5F] mb-10 text-center tracking-wide">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>

      <form
        className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-200 p-10 space-y-6"
        onSubmit={gerarNovoCategorias}
      >

        <div className="flex flex-col gap-2">
          <label
            htmlFor="descricao"
            className="text-sm font-semibold text-[#0F3B5F] tracking-wide"
          >
            Descrição da Categoria
          </label>

          <input
            type="text"
            placeholder="Digite a descrição da categoria"
            name="descricao"
            className="
              border border-slate-300
              rounded-lg
              px-4 py-3
              focus:outline-none
              focus:ring-2
              focus:ring-[#D4AF37]
              focus:border-[#D4AF37]
              transition-all
              duration-200
            "
            value={categorias.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          className="
            w-full
            mt-4
            py-3
            rounded-xl
            font-semibold
            text-white
            bg-[#0F3B5F]
            hover:bg-[#09263D]
            transition-all
            duration-300
            disabled:bg-slate-300
            disabled:cursor-not-allowed
            flex
            justify-center
            items-center
          "
          type="submit"
        >
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