import type { Seguro } from "./Seguro"

export interface Categoria {
  id: number
  descricao: string
  seguro?: Seguro[] | null
}