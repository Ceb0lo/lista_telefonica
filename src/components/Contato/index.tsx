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

  const numeroString = numeroOriginal.toString()

  useEffect(() => {
    if (emailOriginal.length > 0 && numeroOriginal > 0) {
      setNumeroDoContato(numeroString)
      setEmailDoContato(emailOriginal)
    }
  }, [emailOriginal, numeroOriginal])

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
            <Botao
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
            </Botao>
            <Botao onClick={cancelaEdicao}>Cancelar</Botao>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Edidar</Botao>
            <Botao onClick={() => dispatch(remover(id))}>Remover</Botao>
          </>
        )}
      </S.BarraInferior>
    </S.Card>
  )
}

export default Contato
