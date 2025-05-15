import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import ContatoClass from '../../models/Contato'
import { remover, editar } from '../../store/reducers/contato'
import * as S from './styles'
import { Botao } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome,
  numeroDoContato: numeroOriginal,
  emailDoContato: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [numeroDoContato, setNumeroDoContato] = useState('')
  const [emailDoContato, setEmailDoContato] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0 && numeroOriginal > 0) {
      setNumeroDoContato(numeroOriginal)
      setEmailDoContato(emailOriginal)
    }
  }, [emailOriginal, numeroOriginal])

  function cancelaEdicao() {
    setEstaEditando(false)
    setNumeroDoContato(numeroOriginal)
    setEmailDoContato(emailOriginal)
  }

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.CampoTelefone
        mask="99 99999-9999"
        value={numeroDoContato.toString()}
        onChange={(e) => setNumeroDoContato(e.target.value)}
      />
      <S.Campo type="email" value={emailDoContato} />
      <S.BarraInferior>
        <Botao>Edidar</Botao>
        <Botao>Remover</Botao>
      </S.BarraInferior>
    </S.Card>
  )
}

export default Contato
