import type { TipoSeguro } from "../models/TipoSeguro";

export const tiposSeguroMock: TipoSeguro[] = [
  { nome: "Seguro Vida", descricao: "Proteção financeira para você e sua família.", icone: "/icons/vida.svg" },
  { nome: "Seguro Automóvel", descricao: "Cobertura completa para seu veículo.", icone: "/icons/automovel.svg" },
  { nome: "Seguro Residencial", descricao: "Proteção contra imprevistos na sua casa.", icone: "/icons/residencial.svg" },
  { nome: "Seguro Pet", descricao: "Cuidado e proteção para a saúde do seu animal de estimação.", icone: "/icons/pet.svg" },
];