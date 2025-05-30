import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import ContatoClass from '../../models/Contato'
import { remover, editar } from '../../store/reducers/contato'
import * as S from './styles'

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

  const numeroString = numeroOriginal.toString()

  useEffect(() => {
    if (emailOriginal.length > 0 && numeroOriginal > 0) {
      setNumeroDoContato(numeroString)
      setEmailDoContato(emailOriginal)
    }
  }, [emailOriginal, numeroOriginal, numeroString])

  function cancelaEdicao() {
    setEstaEditando(false)
    setNumeroDoContato(numeroString)
    setEmailDoContato(emailOriginal)
  }

  return (
    <S.Card>
      <S.Nome>
        {estaEditando && <em>Editando: </em>}
        {nome}
      </S.Nome>
      <S.CampoTelefone
        disabled={!estaEditando}
        mask="99 99999-9999"
        value={numeroDoContato}
        onChange={(e) => setNumeroDoContato(e.target.value)}
      />
      <S.Campo
        value={emailDoContato}
        disabled={!estaEditando}
        onChange={(e) => setEmailDoContato(e.target.value)}
      />
      <S.BarraInferior>
        {estaEditando ? (
          <>
            <S.BotaoVerde
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    numeroDoContato: Number(numeroDoContato),
                    emailDoContato,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoVerde>
            <S.BotaoVermelho onClick={cancelaEdicao}>Cancelar</S.BotaoVermelho>
          </>
        ) : (
          <>
            <S.BotaoAzul onClick={() => setEstaEditando(true)}>
              Edidar
            </S.BotaoAzul>
            <S.BotaoVermelho onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoVermelho>
          </>
        )}
      </S.BarraInferior>
    </S.Card>
  )
}

export default Contato
