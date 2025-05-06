import * as S from './styles'

const Cabecalho = () => (
  <S.Header>
    <h1>Lista de telefone</h1>
    <S.Busca type="text" placeholder="Busca" />
    <S.NovoContato href="*">Novo Contato</S.NovoContato>
  </S.Header>
)

export default Cabecalho
