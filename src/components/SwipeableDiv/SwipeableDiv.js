import React, { useState, useContext } from 'react'
import { useSwipeable } from 'react-swipeable'
import styled, { ThemeContext } from 'styled-components'
import { IconButton } from '@material-ui/core'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

const StyledDiv = styled.div`
  margin: 1rem auto;
  background-color: ${({ theme }) => theme.colors.secondaryBackground || theme.colors.background};
  position: relative;
  padding: 5px;
  text-align: center;
  font-family: var(--font-nunito);

  @media screen and (min-width: 1024px) {
    width: 100vw;
  }
`
const StyledSpan = styled.span`
  p {
    font-size: 0.5rem;
    font-weight: bolder;
    margin: 0;
    text-transform: uppercase;
  }

  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`

const ButtonContainer = styled.div`
  position: absolute;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  height: 100%;

  ${({ align }) => (align === 'left' ? 'left: 16px' : 'right: 16px')};

  @media screen and (min-width: 1024px) {
    ${({ align }) => (align === 'left' ? 'left: calc(400px + 16px)' : 'right: calc(400px + 16px)')};
  }
`;

export const SwipeableDiv = (props) => {
  const [currentDiv, setCurrentDiv] = useState(1)
  const themeContext = useContext(ThemeContext)

  const handleSwipe = (event) => {
    if (event.dir === 'Left' && currentDiv < divs.length) {
      setCurrentDiv(currentDiv + 1)
    } else if (event.dir === 'Right' && currentDiv > 1) {
      setCurrentDiv(currentDiv - 1)
    }
  }

  const divs = props.divs

  const div = divs[currentDiv - 1]

  const swipeHandlers = useSwipeable({
    onSwiped: handleSwipe
  })

  return (
    <StyledDiv {...swipeHandlers} theme={themeContext}>
      {div}<br />
      <ButtonContainer align="left">
        <IconButton
          color="primary"
          disabled={currentDiv === 1}
          onClick={() => setCurrentDiv(currentDiv - 1)}
          aria-label="Anterior"
          style={{
            color: themeContext.colors.text,
            visibility: currentDiv === 1 ? 'hidden' : 'visible'
          }}
        >
          <StyledSpan>
            <ArrowBack />
            <p>página anterior</p>
          </StyledSpan>
        </IconButton>
      </ButtonContainer>

      <ButtonContainer align="right">
        <IconButton
          color="primary"
          disabled={currentDiv === divs.length}
          onClick={() => setCurrentDiv(currentDiv + 1)}
          aria-label="Próximo"
          style={{
            color: themeContext.colors.text,
            visibility: currentDiv === divs.length ? 'hidden' : 'visible'
          }}
        >
          <StyledSpan>
            <ArrowForward />
            <p>próxima página</p>
          </StyledSpan>
        </IconButton>
      </ButtonContainer>
    </StyledDiv>
  )
}
