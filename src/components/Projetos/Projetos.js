import SwipeableDiv from "../SwipeableDiv"
import TituloSwipeableDiv from "../TituloSwipeableDiv"
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined'
import DetalhesProjeto from "../DetalhesProjeto"

export const Projetos = () => {
  const divs = [
    <>
      <TituloSwipeableDiv
        icon={<LaptopWindowsOutlinedIcon />}
        descricao='Projetos'
      />
      <DetalhesProjeto
        titulo='Codificador/Decodificador'
        img='https://cdn-icons-png.flaticon.com/512/2092/2092703.png'
        linkProjeto='https://decodificador-delta.vercel.app/'
        linkRepositorio='https://github.com/leticiapalaro/decodificador'
        descricao={<>
          Codificador/decodificador de mensagens. Utiliza criptografia simétrica AES. Você escolhe uma chave e coloca a mensagem a ser criptografada. Só é possível revelar a mensagem criptografada com a mesma chave usada na codificação.
          <br />
          Utilizado React com styled-components, material-ui e crypto-js.
        </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<LaptopWindowsOutlinedIcon />}
        descricao='Projetos'
      />
      <DetalhesProjeto
        titulo='Numberblocks Game'
        img='https://uploads-ssl.webflow.com/5ebbbacd07f0f10257ac30d9/5ec2523b3f698ac267380d7f_LPN-Button-2.png'
        linkProjeto='https://numberblocks-game.vercel.app/'
        linkRepositorio='https://github.com/leticiapalaro/numberblocks-game'
        descricao={<>
          Jogo matemático para crianças com tema do desenho Numberblocks, envolve jogos de adivinhação, soma, subtração e multiplicação. Fiz este game pensando especialmente em meu filho, ele tem 5 anos, ama matemática e amou esse joguinho.
          <br />
          Utilizado React com styled-components e react-router-dom.
        </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
  ]
  return (
    <SwipeableDiv divs={divs} />
  )
}