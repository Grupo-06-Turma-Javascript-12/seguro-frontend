import type { Categoria } from "./Categoria"
import type { Usuario } from "./Usuario"

export interface Seguro {
  id: number
  numero_apolice: string
  valor_apolice: number
  cobertura: string;
  status_cobertura: string;
  createdAt: Date
  categoria: Categoria | null
  usuario: Usuario | null
}