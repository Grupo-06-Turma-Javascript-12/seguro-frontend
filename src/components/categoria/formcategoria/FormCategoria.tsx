import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategorias() {

  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategorias);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategorias({
      ...categorias,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovoCategorias(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categorias, setCategorias);
        ToastAlerta("A Categoria foi atualizada com sucesso!", "sucesso");
      } catch {
        ToastAlerta("Erro ao atualizar a categoria.", "erro");
      }
    } else {
      try {
        await cadastrar(`/categoria`, categorias, setCategorias);
        ToastAlerta("A Categoria foi cadastrada com sucesso!", "sucesso");
      } catch {
        ToastAlerta("Erro ao cadastrar a categoria.", "erro");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="min-h-screen bg-[#0F3B5F] py-12 px-4">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-2">
            Painel Administrativo
          </p>
          <h1 className="text-4xl font-bold text-white mb-3">
            {id === undefined ? "📁 Cadastrar Categoria" : "✏️ Editar Categoria"}
          </h1>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-slate-200 text-sm max-w-md mx-auto">
            {id === undefined
              ? "Preencha os dados abaixo para registrar uma nova categoria."
              : "Atualize as informações da categoria abaixo."}
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={gerarNovoCategorias}
          className="bg-[#0B2C45] rounded-2xl p-8 border border-[#D4AF37]/30 shadow-lg space-y-6"
        >
          <h2 className="text-white font-bold text-lg mb-1">Dados da Categoria</h2>
          <div className="w-10 h-0.5 bg-[#D4AF37] mb-2" />

          {/* Descrição */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="descricao"
              className="text-[#D4AF37] text-sm font-semibold"
            >
              Descrição da Categoria
            </label>
            <input
              type="text"
              placeholder="Digite a descrição da categoria"
              name="descricao"
              id="descricao"
              required
              className="w-full bg-[#0B2C45] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] focus:bg-[#123E63] transition placeholder-slate-500"
              value={categorias.descricao ?? ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          {/* Divisor */}
          <div className="w-full h-px bg-[#D4AF37]/20" />

          {/* Botões */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={retornar}
              className="flex-1 py-3 rounded-xl font-semibold text-sm text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              ← Voltar
            </button>

            <button
              type="submit"
              className="flex-1 py-3 rounded-xl font-bold text-sm text-[#0F3B5F] bg-[#D4AF37] hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <ClipLoader color="#0F3B5F" size={20} />
              ) : (
                <span>{id === undefined ? "🚀 Cadastrar" : "✅ Atualizar"}</span>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default FormCategorias;