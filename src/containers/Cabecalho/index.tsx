import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

type Props = {
  alteraBotao: boolean
}

const Cabecalho = ({ alteraBotao }: Props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Header>
      <h1>Lista de telefone</h1>
      <S.Busca
        type="text"
        placeholder="Busca"
        value={termo}
        onChange={(e) => dispatch(alteraTermo(e.target.value))}
      />
      {alteraBotao ? (
        <S.NovoContato to="/novoContato">Novo Contato</S.NovoContato>
      ) : (
        <S.NovoContato to="/">Voltar para a lista</S.NovoContato>
      )}
    </S.Header>
  )
}

export default Cabecalho
