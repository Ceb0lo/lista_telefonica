import InputMask from 'react-input-mask'
import { styled } from 'styled-components'
import { Botao } from '../../styles'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fcfcfc;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  display: grid;
`
export const Nome = styled.h3`
  font-weidht: bold;
  font-size: 24px;
  margin-bottom: 8px;
`
export const Campo = styled.input`
  font-size: 18px;
  border: none;
  background-color: transparent;
  margin-bottom: 8px;
`
export const CampoTelefone = styled(InputMask)`
  font-size: 18px;
  border: none;
  background-color: transparent;
  margin-bottom: 8px;
`

export const BarraInferior = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const BotaoVermelho = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const BotaoAzul = styled(Botao)`
  background-color: ${variaveis.azul};
`
export const BotaoVerde = styled(Botao)`
  background-color: ${variaveis.verde};
`
