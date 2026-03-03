import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Seguro } from "../../../models/Seguro";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function StatusSeguro() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [seguro, setSeguro] = useState<Seguro>({} as Seguro);

  const { id } = useParams<{ id: string }>();

  async function buscarSeguroPorId(id: string) {
    try {
      await buscar(`/seguros/${id}`, setSeguro);
    } catch {
      ToastAlerta("Seguro não encontrado", "erro")
    }
  }

  useEffect(() => {
    setSeguro({
      ...seguro,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setSeguro({
      ...seguro,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario
    });
  }

  function retornar() {
    navigate('/seguros');
  }

  async function alterarStatusSeguro(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        console.log(JSON.stringify(seguro, null, 2));
        await atualizar(`/seguros/${id}/${seguro.status_cobertura}`, seguro, setSeguro);

        ToastAlerta('Status atualizado com sucesso', 'sucesso');
      } catch {
        ToastAlerta('Erro ao atualizar o status', 'erro');
      }
    } else {
      try {
        await cadastrar(`/seguros`, seguro, setSeguro);

        ToastAlerta('Seguro cadastrado com sucesso', 'sucesso');
      } catch {
        ToastAlerta('Erro ao cadastrar a Seguro', 'erro');
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 py-10 px-4">

      <h1 className="text-4xl font-bold text-[#0F3B5F] mb-10 text-center tracking-wide">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>

      <form
        className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-200 p-10 space-y-6"
        onSubmit={alterarStatusSeguro}
      >

        <div className="flex flex-col gap-2">
          <label
            htmlFor="descricao"
            className="text-sm font-semibold text-[#0F3B5F] tracking-wide"
          >
            Status do Seguro
          </label>

          <input
            type="text"
            placeholder="Digite a situação da apolice"
            name="status_cobertura"
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
            value={seguro.status_cobertura}
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
export default StatusSeguro