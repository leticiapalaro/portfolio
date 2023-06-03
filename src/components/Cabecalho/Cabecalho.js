import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: center;
  width: 90vw;
  margin: auto;
`

export const Cabecalho = () => {
  return (
    <StyledDiv>
      <h1 style={{ fontFamily: 'var(--font-parisienne)', margin: '0 auto' }}><AutoAwesomeOutlinedIcon style={{ fontSize: '1.6rem' }} />~ Letícia Palaro ~<AutoAwesomeOutlinedIcon style={{ fontSize: '1.6rem' }} /></h1>
      <p style={{ margin: '0', fontFamily: 'var(--font-nunito)', fontSize: '0.5rem' }}>DESENVOLVIMENTO WEBㅤ|ㅤSUPORTE DE TIㅤ|ㅤASSIT. DE GERENTE DE PROJETOS</p>
    </StyledDiv>
  )
}