import styled from "styled-components"

const StyledTitulo2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin: 0;

  .MuiSvgIcon-root {
    font-size: 2.5rem;
    margin: 0 8px;
  }

`

export const TituloSwipeableDiv = (props) => {
  return (
    <StyledTitulo2>
      {props.icon}
      {props.descricao}
    </StyledTitulo2>
  )
}