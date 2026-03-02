import type { Seguro } from "./Seguro"

export interface Usuario {
  id: number
  nome: string
  usuario: string
  senha: string
  foto: string
  seguro?: Seguro[] | null
}