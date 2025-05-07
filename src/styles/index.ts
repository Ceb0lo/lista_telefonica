import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
}
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Botao = styled.button`
  font-wight: bold;
  font-size: 12px;
  color: #ff;
  padding: 8px 12px;
  border: none;
  cursor: ponter;
  color: #fff;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export default EstiloGlobal
