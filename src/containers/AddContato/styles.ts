import { styled } from 'styled-components'
import InputMask from 'react-input-mask'
import { Botao } from '../../styles'
import variaveis from '../../styles/variaveis'

export const Campo = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 8px;
  width: 50%;
`
export const CampoTelefone = styled(InputMask)`
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 8px;
  width: 50%;
`
export const Titulo = styled.h3`
  font-weidht: bold;
  font-size: 24px;
  margin-bottom: 8px;
`
export const Form = styled.form`
  display: blok;
`
export const BotaoVerde = styled(Botao)`
  background-color: ${variaveis.verde};
`
