import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`
export const Busca = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  width: 50%;
`
export const NovoContato = styled(Link)`
  font-wight: bold;
  font-size: 17px;
  color: #fff;
  padding: 8px 12px;
  color: #fff;
  background-color: ${variaveis.verdeBrilhante};
  border-radius: 8px;
  text-decoration: none;
`
