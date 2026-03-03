import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import type { Seguro } from "../../../models/Seguro";
import type { Usuario } from "../../../models/Usuario";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

const COBERTURAS = [
  { id: "basica", nome: "Cobertura Básica", icone: "🛡️" },
  { id: "hospitalar", nome: "Cobertura Hospitalar", icone: "🏥" },
  { id: "completa", nome: "Cobertura Completa", icone: "⭐" },
  { id: "total", nome: "Cobertura Total", icone: "💎" },
];

function gerarApolice() {
  const parte1 = Math.random().toString(36).substring(2, 6).toUpperCase();
  const parte2 = Math.floor(Math.random() * 90000 + 10000);
  const parte3 = Math.random().toString(36).substring(2, 5).toUpperCase();
  return 'ELO-' + parte1 + '-' + String(parte2) + '-' + parte3;
}

function FormSeguro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: "" });
  const [seguro, setSeguro] = useState<Seguro>({ numero_apolice: gerarApolice() } as Seguro);

  const { id } = useParams<{ id: string }>();

  const [usuario] = useState<Usuario>({
    id: 1,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  async function buscarSeguroPorId(id: string) {
    try {
      await buscar(`/seguros/${id}`, setSeguro);
    } catch {
      ToastAlerta("Seguro não encontrado", "erro");
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria);
    } catch {
      ToastAlerta("Categoria não encontrada", "erro");
    }
  }

  async function buscarCategorias() {
    try {
      await buscar("/categoria", setCategorias);
    } catch {
      ToastAlerta("Erro ao buscar Categorias!", "erro");
    }
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) buscarSeguroPorId(id);
  }, [id]);

  useEffect(() => {
    setSeguro((prev) => ({ ...prev, categoria }));
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setSeguro({
      ...seguro,
      [e.target.name]: e.target.value,
      categoria,
      usuario,
    });
  }

  function retornar() {
    navigate("/seguros");
  }

  async function gerarNovoSeguro(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/seguros/`, seguro, setSeguro);
        ToastAlerta("Seguro atualizado com sucesso", "sucesso");
      } catch {
        ToastAlerta("Erro ao atualizar o Seguro", "erro");
      }
    } else {
      try {
        await cadastrar(`/seguros`, seguro, setSeguro);
        ToastAlerta("Seguro cadastrado com sucesso", "sucesso");
      } catch {
        ToastAlerta("Erro ao cadastrar o Seguro", "erro");
      }
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoCategoria = categoria.descricao === "";

  const inputClass =
    "w-full bg-[#0B2C45] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] focus:bg-[#123E63] transition placeholder-slate-500 [&::-webkit-inner-spin-button]:appearance-none";

  const selectClass =
    "w-full bg-[#0B2C45] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] focus:bg-[#123E63] transition [&>option]:bg-[#0B2C45] [&>option]:text-white";

  return (
    <div className="min-h-screen bg-[#0F3B5F] py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-2">
            {id !== undefined ? "Painel Administrativo" : "Simulação de Seguro"}
          </p>
          <h1 className="text-4xl font-bold text-white mb-3">
            {id !== undefined ? "✏️ Editar Seguro" : "🔐 Cadastrar Seguro"}
          </h1>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-slate-200 text-sm max-w-md mx-auto">
            {id !== undefined
              ? "Atualize as informações da apólice abaixo."
              : "Preencha os dados abaixo para registrar uma nova apólice."}
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={gerarNovoSeguro}
          className="bg-[#0B2C45] rounded-2xl p-8 border border-[#D4AF37]/30 shadow-lg space-y-6"
        >
          <h2 className="text-white font-bold text-lg mb-1">Dados da Apólice</h2>
          <div className="w-10 h-0.5 bg-[#D4AF37] mb-2" />

          {/* Número da Apólice */}
          <div className="flex flex-col gap-2">
            <label className="text-[#D4AF37] text-sm font-semibold">
              Número da Apólice
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="numero_apolice"
                required
                readOnly
                className="flex-1 bg-[#0F3B5F]/60 border border-[#D4AF37]/20 rounded-xl px-4 py-3 text-slate-300 text-sm font-mono tracking-wider focus:outline-none cursor-not-allowed opacity-80"
                value={seguro.numero_apolice ?? ""}
              />
              {id === undefined && (
                <button
                  type="button"
                  title="Gerar novo número"
                  onClick={() => setSeguro((prev) => ({ ...prev, numero_apolice: gerarApolice() }))}
                  className="bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] px-3 rounded-xl hover:bg-[#D4AF37]/30 hover:scale-105 transition text-sm"
                >
                  🔄
                </button>
              )}
            </div>
            <p className="text-slate-400 text-xs">
              {id === undefined
                ? "Gerado automaticamente — clique em 🔄 para regerar"
                : "Número da apólice original"}
            </p>
          </div>

          {/* Cobertura */}
          <div className="flex flex-col gap-2">
            <label className="text-[#D4AF37] text-sm font-semibold">
              Tipo de Cobertura
            </label>
            <div className="grid grid-cols-2 gap-3">
              {COBERTURAS.map((cob) => (
                <div
                  key={cob.id}
                  onClick={() =>
                    setSeguro((prev) => ({ ...prev, cobertura: cob.nome, categoria, usuario }))
                  }
                  className={`cursor-pointer rounded-xl px-4 py-3 border transition-all duration-200 flex items-center gap-3 ${
                    seguro.cobertura === cob.nome
                      ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]"
                      : "bg-[#0F3B5F] border-[#D4AF37]/20 text-slate-200 hover:border-[#D4AF37]/60 hover:bg-[#123E63]"
                  }`}
                >
                  <span className="text-lg">{cob.icone}</span>
                  <span className="text-xs font-semibold">{cob.nome}</span>
                </div>
              ))}
            </div>
            {/* Campo hidden para validação */}
            <input
              type="text"
              name="cobertura"
              required
              className="hidden"
              value={seguro.cobertura ?? ""}
              readOnly
            />
          </div>

          {/* Valor */}
          <div className="flex flex-col gap-2">
            <label className="text-[#D4AF37] text-sm font-semibold">
              Valor da Apólice (R$)
            </label>
            <input
              type="number"
              placeholder="Ex: 149.90"
              name="valor_apolice"
              required
              className={inputClass}
              value={seguro.valor_apolice ?? ""}
              onChange={(e) =>
                setSeguro({ ...seguro, valor_apolice: parseFloat(e.target.value) })
              }
            />
          </div>

          {/* Categoria */}
          <div className="flex flex-col gap-2">
            <label className="text-[#D4AF37] text-sm font-semibold">
              Categoria do Seguro
            </label>
            <select
              name="categoria"
              className={selectClass}
              onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Selecione uma Categoria
              </option>
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.descricao}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-2">
            <label className="text-[#D4AF37] text-sm font-semibold">
              Status da Apólice
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { valor: 'Ativo', icone: '✅' },
                { valor: 'Inativo', icone: '⛔' },
                { valor: 'Em Análise', icone: '🔍' },
              ].map((s) => (
                <div
                  key={s.valor}
                  onClick={() => setSeguro((prev) => ({ ...prev, status: s.valor }))}
                  className={`cursor-pointer rounded-xl px-3 py-3 border transition-all duration-200 flex flex-col items-center gap-1 ${
                    seguro.status === s.valor
                      ? s.valor === 'Ativo'
                        ? 'bg-green-500/20 border-green-400 text-green-300'
                        : s.valor === 'Inativo'
                        ? 'bg-red-500/20 border-red-400 text-red-300'
                        : 'bg-yellow-500/20 border-yellow-400 text-yellow-300'
                      : 'bg-[#0F3B5F] border-[#D4AF37]/20 text-slate-200 hover:border-[#D4AF37]/60 hover:bg-[#123E63]'
                  }`}
                >
                  <span className="text-lg">{s.icone}</span>
                  <span className="text-xs font-semibold">{s.valor}</span>
                </div>
              ))}
            </div>
            <input type="text" name="status" required className="hidden" value={seguro.status ?? ''} readOnly />
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
              disabled={carregandoCategoria}
              className="flex-1 py-3 rounded-xl font-bold text-sm text-[#0F3B5F] bg-[#D4AF37] hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <ClipLoader color="#0F3B5F" size={20} />
              ) : (
                <span>{id === undefined ? "🚀 Cadastrar Seguro" : "✅ Atualizar Seguro"}</span>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default FormSeguro;