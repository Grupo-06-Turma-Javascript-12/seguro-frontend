import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import type { Seguro } from "../../../models/Seguro";
import type { Usuario } from "../../../models/Usuario";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormSeguro() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: '', });
  const [seguro, setSeguro] = useState<Seguro>({} as Seguro);

  const { id } = useParams<{ id: string }>();

  const [usuario, setUsuario] = useState<Usuario>({
    id: 1,
    nome: "",
    usuario: "",
    senha: "",
    foto: ""
  })

  async function buscarSeguroPorId(id: string) {
    try {
      await buscar(`/seguros/${id}`, setSeguro);
    } catch {
      ToastAlerta("Seguro não encontrado", "erro")
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria);
    } catch {
      ToastAlerta("Categoria não encontrada", "erro")
    }
  }

  async function buscarCategorias() {
    try {
      await buscar('/categoria', setCategorias);
    } catch {
      ToastAlerta("Erro ao buscar Categorias!", "erro")
    }
  }

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarSeguroPorId(id);
    }
  }, [id]);

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

  async function gerarNovoSeguro(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        console.log(JSON.stringify(seguro, null, 2));
        await atualizar(`/seguros/`, seguro, setSeguro);

        ToastAlerta('Seguro atualizado com sucesso', 'sucesso');
      } catch {
        ToastAlerta('Erro ao atualizar o Seguro', 'erro');
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

  const carregandoCategoria = categoria.descricao === '';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-[#0F3B5F] mb-10 text-center tracking-wide">
        {id !== undefined ? 'Editar Seguro' : 'Cadastrar Seguro'}
        </h1>

      <form className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-200 p-10 space-y-6"
      onSubmit={gerarNovoSeguro}
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#0F3B5F] tracking-wide" htmlFor="titulo">Numero da Apolice</label>
          <input
            type="text"
            placeholder="Apolice"
            name="numero_apolice"
            required
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
            value={seguro.numero_apolice}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#0F3B5F] tracking-wide" htmlFor="titulo">Cobertura</label>
          <input
            type="text"
            placeholder="Cobertura"
            name="cobertura"
            required
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
            value={seguro.cobertura}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#0F3B5F] tracking-wide" htmlFor="valor">Valor</label>
          <input
            type="number"
            placeholder="valor"
            name="valor_apolice"
            required
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
            value={seguro.valor_apolice}
            onChange={(e) => setSeguro({...seguro, valor_apolice: parseFloat(e.target.value)})}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-[#0F3B5F] tracking-wide">Categoria do Seguro</p>
          <select name="categoria" id="categoria" className="
          border border-slate-300
          rounded-lg
          px-4 py-3
          bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-[#D4AF37]
          focus:border-[#D4AF37]
          transition-all
          duration-200
          "
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma Categoria</option>

            {categorias.map((categoria) => (
            <>
              <option value={categoria.id} >{categoria.descricao}</option>
            </>
            ))}

          </select>
        </div>

        <button
          type='submit'
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
          disabled={carregandoCategoria}
        >
          { isLoading ?
              <ClipLoader
                  color="#ffffff"
                  size={24}
              /> :
              <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default FormSeguro;