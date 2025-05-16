import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'

const Lista = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtroDeContatos = () => {
    let contatosFiltardos = itens
    if (termo !== undefined) {
      contatosFiltardos = contatosFiltardos.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return contatosFiltardos
    } else {
      return itens
    }
  }

  const resultadoDaBusca = (quantidade: number) => {
    let mensagem = ''
    const textoPesquisa =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ``
    mensagem = `${quantidade} contatos(s) marcado(s) como: ${textoPesquisa}`
    return mensagem
  }

  const contatos = filtroDeContatos()
  const mensagem = resultadoDaBusca(contatos.length)

  return (
    <>
      <p>{mensagem}</p>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              numeroDoContato={c.numeroDoContato}
              emailDoContato={c.emailDoContato}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Lista
