class Contato {
  nome: string
  numeroDoContato: number
  emailDoContato: string
  id: number

  constructor(
    nome: string,
    numeroDoContato: number,
    emailDoContato: string,
    id: number
  ) {
    this.nome = nome
    this.numeroDoContato = numeroDoContato
    this.emailDoContato = emailDoContato
    this.id = id
  }
}

export default Contato
