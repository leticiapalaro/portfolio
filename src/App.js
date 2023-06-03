import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { IconButton } from '@material-ui/core'
import { Brightness4, Brightness7 } from '@material-ui/icons'
import Cabecalho from './components/Cabecalho'
import { Home as HomePage } from './pages/Home/Home'

const StyledSpan = styled.span`

  .botao-tema {
    bottom: 0;
    right: 0;
    z-index: 999;
    position: fixed;
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

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>

      <StyledSpan>
        <IconButton
          color="primary"
          onClick={toggleTheme}
          style={{
            color: isDarkMode ? 'var(--melon-color)' : 'var(--licorice-color)',
          }}
          aria-label='Mudar esquema de cores da página'
        >
          <span
            className='botao-tema'
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {isDarkMode ? (
              <>
                <Brightness7 />
                <p>tema claro</p>
              </>
            ) : (
              <>
                <Brightness4 />
                <p>tema escuro</p>
              </>
            )}
          </span>
        </IconButton>
      </StyledSpan>

      <GlobalStyle />

      <Cabecalho />
      <HomePage isDarkMode={isDarkMode}/>

    </ThemeProvider>
  )
}

export default App;
