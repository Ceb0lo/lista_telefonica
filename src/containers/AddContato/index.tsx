import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastar } from '../../store/reducers/contato'
import * as S from './styles'

const AddContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [numeroDoContato, setNumeroDoContato] = useState('')
  const [emailDoContato, setEmailDoContato] = useState('')

  const cadastrarContato = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      cadastar({
        nome,
        emailDoContato,
        numeroDoContato: Number(numeroDoContato)
      })
    )
    navigate('/')
  }

  return (
    <>
      <S.Titulo>Novo contato</S.Titulo>
      <S.Form onSubmit={cadastrarContato}>
        <S.Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome do Contata"
        />
        <S.CampoTelefone
          value={numeroDoContato}
          onChange={(e) => setNumeroDoContato(e.target.value)}
          mask="99 99999-9999"
          placeholder="Numero do Contata"
        />
        <S.Campo
          value={emailDoContato}
          onChange={(e) => setEmailDoContato(e.target.value)}
          type="email"
          placeholder="E-mail do Contata"
        />
        <br />
        <S.BotaoVerde type="submit">Cadastrar</S.BotaoVerde>
      </S.Form>
    </>
  )
}

export default AddContato
