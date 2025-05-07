import ContatoClass from '../../models/Contato'
import { Botao } from '../../styles'
import * as S from './styles'

type Props = ContatoClass

const Contato = ({
  nome,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  return (
    <S.Card>
      <S.Nome>Nomo do contato</S.Nome>
      <S.Campo type="number" />
      <S.Campo type="email" />
      <S.BarraInferior>
        <Botao>Edidar</Botao>
        <Botao>Remover</Botao>
      </S.BarraInferior>
    </S.Card>
  )
}

export default Contato
