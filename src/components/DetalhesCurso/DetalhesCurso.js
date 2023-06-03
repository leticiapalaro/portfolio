import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: left;
  width: 90%;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  background-color: ${({ theme }) => theme.colors.cursosBackground || theme.colors.background};

  img {
    height: 50px;
    margin-right: 1rem;
  }

  h3, p{
    margin: 0;
  }

  .display-flex {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: left;
  }

  .descricao-curso {
    margin: auto;
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
  }
`

export const DetalhesCurso = (props) => {
  return (
    <StyledDiv>
      <div className="display-flex">
        <img
          src={props.img}
          alt={`logo instituição de ensino ${props.instituicao}`}
        />
        <div>
          <h3>{props.curso}</h3>
          <p>
            {props.instituicao}
          </p>
        </div>
      </div>
      <br />
      <div className="descricao-curso">
        <p>{props.detalhes}</p>
        <p>Carga: {props.carga} ㅤ Status: {props.status}</p>
      </div>
    </StyledDiv>
  )
}