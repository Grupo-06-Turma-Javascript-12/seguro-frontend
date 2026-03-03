import { useEffect, useState, type ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import type { Seguro } from '../../../models/Seguro';
import { atualizar, buscar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerta';

function StatusSeguro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [seguro, setSeguro] = useState<Seguro>({} as Seguro);

  const [status, setStatus] = useState({
    status: '',
  });

  const { id } = useParams<{ id: string }>();

  async function buscarSeguroPorId(id: string) {
    try {
      await buscar(`/seguros/${id}`, setSeguro);
    } catch {
      ToastAlerta('Seguro não encontrado', 'erro');
    }
  }

  useEffect(() => {
    buscarSeguroPorId(id!);
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLSelectElement>) {
    setStatus({
      status: e.currentTarget.value,
    });
  }

  function retornar() {
    navigate('/seguros');
  }

  async function alterarStatusSeguro(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(status);
    setIsLoading(true);
    try {
      await atualizar(`/seguros/${id}/status`, status, setStatus);
      retornar();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-[#0F3B5F] mb-10 text-center tracking-wide">
        Atualizar Status
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
            Status do Seguro: {seguro.numero_apolice}
          </label>
          {seguro.status_cobertura}

          <select
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
            name="status"
            id="status"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => atualizarEstado(e)}
          >
            <option value="" selected disabled>
              Escolha o status
            </option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
            <option value="Em análise">Em Análise</option>
          </select>
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
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          )}
        </button>
      </form>
    </div>
  );
}
export default StatusSeguro;