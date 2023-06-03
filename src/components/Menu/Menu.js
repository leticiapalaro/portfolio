import React, { useState } from 'react'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';
import WorkIcon from '@mui/icons-material/Work';
import styled from 'styled-components'
import { logoReact, logoCSharp, logoHTML, logoCSS, logoJavaScript, logoNodeJs, logoTypeScript, logoJava } from '../../utils/svgImgs'
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: auto;
  flex-wrap: wrap;
  font-family: var(--font-nunito);
  background-color: ${({ theme }) => theme.colors.secondaryBackground || theme.colors.background};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  .img-perfil {
    border: 1px solid;
    border-radius: 50% 0 0 50%;
    width: 160px;
    height: 160px;
    margin-right: 4px;
  }

  .div-menu{
    display: flex;
    flex-direction: column;
    height: 160px;
    justify-content: space-between;
  }

  .contato {
    margin: 0.5rem;
    display: flex;
    justify-content: center;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 250px;
    margin: 0 auto 6px auto;
  }
`

const StyledP = styled.p`
  font-size: 1rem;
  margin: 0;
  border: 1px solid;
  border-radius: 0 20px 20px 0;
  width: 150px;
  padding: 4px;
  display: flex;
  align-items: center;
`

export const Menu = (props) => {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = () => {
    const email = 'leticiapalaro@live.com'
    const tempInput = document.createElement('input')
    tempInput.value = email
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 3000)
  }

  const handleOpenEmail = () => {
    const email = 'leticiapalaro@live.com'
    window.location.href = `mailto:${email}`
  }

  return (
    <>
      <StyledDiv>
        <a href="#" onClick={handleOpenEmail} style={{ textAlign: 'center', margin: '0.5rem' }}>
          <ForwardToInboxOutlinedIcon />
          Entrar em contato agora
        </a>

        <StyledDiv>
          <img className='img-perfil' src='https://github.com/leticiapalaro.png' />
          <div className='div-menu'>

            <StyledP onClick={() => {
              props.mostrarHome(false)
              props.mostrarSobre(true)
            }}>
              <AccountCircleOutlinedIcon
                style={{ marginRight: '8px' }}
              /> Sobre
            </StyledP>

            <StyledP onClick={() => {
              props.mostrarHome(false)
              props.mostrarFormacao(true)
            }}>
              <SchoolOutlinedIcon
                style={{ marginRight: '8px' }}
              /> Formação
            </StyledP>

            <StyledP onClick={() => {
              props.mostrarHome(false)
              props.mostrarExperiencia(true)
            }}>
              <WorkIcon
                style={{ marginRight: '8px' }}
              /> Experiência Profissional
            </StyledP>

            <StyledP onClick={() => {
              props.mostrarHome(false)
              props.mostrarProjetos(true)
            }}>
              <LaptopWindowsOutlinedIcon
                style={{ marginRight: '8px' }}
              /> Projetos
            </StyledP>

          </div>
        </StyledDiv>

        <div>
          <p className='contato'>
            <a href="#" onClick={handleCopyEmail}>
              E-mail<ArrowOutwardSharpIcon />
            </a>ㅤ
            <a href='https://www.linkedin.com/in/leticiapalaro/'>LinkedIn<ArrowOutwardSharpIcon /></a>ㅤ
            <a href='https://github.com/leticiapalaro'>GitHub<ArrowOutwardSharpIcon /></a>
          </p>
          {emailCopied && <span>e-mail copiado para a área de transferência</span>}

          <div className='skills'>
            {logoReact}
            {logoHTML}
            {logoCSS}
            {logoJavaScript}
            {logoTypeScript}
            {logoNodeJs}
            {logoJava}
            {logoCSharp}
          </div>

        </div>

      </StyledDiv>
    </>
  )
}