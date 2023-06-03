import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: center;
  width: 90vw;
  margin: auto;

  p {
    margin: 0.5rem auto;
    font-size: 0.9rem;
  }
`

export const Apresentacao = () => {
  return (
    <StyledDiv>
      <p>
        <FavoriteBorderOutlinedIcon style={{ fontSize: '1rem' }}/>
        ㅤOlá! Seja bem vindo(a)ㅤ
        <FavoriteBorderOutlinedIcon style={{ fontSize: '1rem' }}/>
      </p>
      <p> Minha incrível jornada na área de tecnologia é impulsionada pela paixão de transformar desafios em oportunidades brilhantes de solução.
      <br/ >
      Com determinação e uma busca incessante por conhecimento, sou movida a fazer a diferença. </p>
      <p>Será um prazer compartilhar com você minha história na área de tecnologia, recheada de paixão, entusiasmo e conquistas.</p>
    </StyledDiv>
  )
}