import styled from 'styled-components'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';

const StyledDiv = styled.div`
  text-align: center;
  width: 90%;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  background-color: ${({ theme }) => theme.colors.cursosBackground || theme.colors.background};

  img {
    height: 100px;
    border-radius: 10px;
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  hr {
    border-color: ${({ theme }) => theme.colors.text};
  }

  h3, p{
    margin: 0;
  }

  .display-flex {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
  }
`

export const DetalhesProjeto = (props) => {
  return (
    <StyledDiv>
      <h3>{props.titulo}</h3>
      <br/>
      <div className='display-flex'>
        <img src={props.img} alt={`imagem do projeto ${props.titulo}`}/>
        <div>
          <p className='display-flex'><CodeOutlinedIcon /><a href={props.linkProjeto}> Projeto Online </a></p>
          <br/>
          <p className='display-flex'><MobileScreenShareOutlinedIcon /><a href={props.linkRepositorio}> Repositório </a></p>
        </div>
      </div>
      <hr />
      <p>{props.descricao}</p>
    </StyledDiv>
  )
}