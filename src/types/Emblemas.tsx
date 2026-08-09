export interface Emblema {
  id: string;
  texto: string;
  cor: string;
  letra: string;
}

export const EMBLEMAS_DISPONIVEIS: Emblema[] = [
  { id: 'ciencias',    texto: 'Ciências',    cor: 'var(--verde)', letra: 's' },
  { id: 'tecnologia',  texto: 'Tecnologia',  cor: 'rgba(112, 69, 146, .8)', letra: 't' },
  { id: 'engenharia',  texto: 'Engenharia',  cor: 'var(--primaria)', letra: 'e' },
  { id: 'matematica',  texto: 'Matemática',  cor: 'var(--rosa)', letra: 'm' },
]