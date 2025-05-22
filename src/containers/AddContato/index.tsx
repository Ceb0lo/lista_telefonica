import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastar } from '../../store/reducers/contato'

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
      <h1>Novo contato</h1>
      <form onSubmit={cadastrarContato}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome do Contata"
        />
        <input
          value={numeroDoContato}
          onChange={(e) => setNumeroDoContato(e.target.value)}
          type="number"
          placeholder="Numero do Contata"
        />
        <input
          value={emailDoContato}
          onChange={(e) => setEmailDoContato(e.target.value)}
          type="email"
          placeholder="E-mail do Contata"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}

export default AddContato
