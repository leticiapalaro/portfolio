import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: center;
  width: 90%;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  background-color: ${({ theme }) => theme.colors.cursosBackground || theme.colors.background};

  h3, p{
    margin: 0;
  }

  .display-flex {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: left;
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
  }
`

export const DetalhesExperienciaProfissional = (props) => {
  return (
    <StyledDiv>
      <h3>{props.cargo}</h3>
      <p>{props.empresa} ({props.periodo})</p><br/>
      <p>{props.descricao}</p>
    </StyledDiv>
  )
}