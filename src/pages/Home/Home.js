import { useState } from "react"
import Apresentacao from "../../components/Apresentacao"
import Menu from "../../components/Menu"
import Sobre from '../../components/Sobre'
import Formacao from '../../components/Formacao'
import ExperienciaProfissional from '../../components/ExperienciaProfissional'
import Projetos from '../../components/Projetos'
import styled from "styled-components"
import { IconButton } from '@material-ui/core'
import { Home as HomeIcon } from '@material-ui/icons'

const StyledSpan = styled.span`

  .botao-home {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    margin: 0.5rem;

    @media screen and (min-width: 1024px) {
      top: 0;
      bottom: auto;
      margin: 2rem 400px;
    }
  }

  *{
    font-family: var(--font-nunito);

    p {
      font-size: 0.5rem;
      font-weight: bolder;
      text-transform: uppercase;
    }
  }
`

export const Home = (props) => {
  const [mostrarSobre, setMostrarSobre] = useState(false)
  const [mostrarFormacao, setMostrarFormacao] = useState(false)
  const [mostrarExperiencia, setMostrarExperiencia] = useState(false)
  const [mostrarProjetos, setMostrarProjetos] = useState(false)
  const [mostrarHome, setMostrarHome] = useState(true)

  const resetar = () => {
    setMostrarSobre(false)
    setMostrarFormacao(false)
    setMostrarExperiencia(false)
    setMostrarProjetos(false)
    setMostrarHome(true)
  }

  return (
    <>
      {mostrarHome &&
        <>
          <Apresentacao />
          <Menu
            mostrarHome={setMostrarHome}
            mostrarSobre={setMostrarSobre}
            mostrarFormacao={setMostrarFormacao}
            mostrarExperiencia={setMostrarExperiencia}
            mostrarProjetos={setMostrarProjetos}
          />
        </>
      }
      {mostrarSobre && <Sobre />}
      {mostrarFormacao && <Formacao />}
      {mostrarExperiencia && <ExperienciaProfissional />}
      {mostrarProjetos && <Projetos />}

      {!mostrarHome &&
        <StyledSpan>
          <IconButton
            color="primary"
            onClick={() => resetar()}
            style={{ color: props.isDarkMode ? 'var(--melon-color)' : 'var(--licorice-color)' }}
            aria-label='Ir para a página inicial'
          >
            <span
              className='botao-home'
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <HomeIcon />
              <p>home</p>
            </span>
          </IconButton>
        </StyledSpan>
      }
    </>
  )
}