import SwipeableDiv from "../SwipeableDiv"
import TituloSwipeableDiv from "../TituloSwipeableDiv"
import DetalhesSobre from "../DetalhesSobre"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

export const Sobre = () => {
  const divs = [
    <>
      <TituloSwipeableDiv
        icon={<AccountCircleOutlinedIcon />}
        descricao='Sobre'
      />
      <DetalhesSobre
        descricao={<>Olá! Hoje, tenho o prazer de compartilhar com você a minha jornada apaixonante no mundo da tecnologia. Sou Letícia Palaro, uma mulher entusiasmada e determinada, formada em Análise e Desenvolvimento de Sistemas e atualmente cursando uma pós-graduação em Gestão de Projetos.
        </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<AccountCircleOutlinedIcon />}
        descricao='Sobre'
      />
      <DetalhesSobre
        descricao={<>Desde a minha infância, fui cativada pela tecnologia. Tudo começou com o incrível universo dos jogos, onde embarquei em emocionantes aventuras com o meu querido Nintendo64. À medida que o tempo passava, acompanhei a evolução tecnológica, migrando para os jogos de computador e experimentando novas possibilidades.
        </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<AccountCircleOutlinedIcon />}
        descricao='Sobre'
      />
      <DetalhesSobre
        descricao={<>Contudo, foi quando eu tinha cerca de 11 anos que vivi um momento revelador. Percebi que a pizzaria dos meus pais enfrentava problemas devido a erros de cálculos manuais e interpretação da caligrafia dos atendentes. Determinada a ajudar, criei uma planilha no Excel que automatizava os cálculos dos pedidos, levando em consideração os produtos e suas quantidades. O resultado foi surpreendente! Os problemas foram solucionados, e fiquei emocionada com o impacto positivo que a tecnologia trouxe para o negócio de minha família.
        </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<AccountCircleOutlinedIcon />}
        descricao='Sobre'
      />
      <DetalhesSobre
        descricao={<>Apesar dessa experiência marcante, confesso que não imaginava que a tecnologia seria o meu caminho profissional. No entanto, no final de 2019, tive a oportunidade de participar de um processo seletivo que mudou minha vida. Fui selecionada para trabalhar no setor de Tecnologia da Informação de um órgão público. Foi nesse momento que encontrei minha verdadeira paixão. A experiência foi incrível, e aprendi lições valiosas que abriram as portas para minha nova trajetória.
        {/* Decidi investir uma parte do meu salário na minha formação acadêmica nessa área, e hoje estou formada, além de estar cursando uma pós-graduação para aprimorar ainda mais meus conhecimentos. */}
                </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<AccountCircleOutlinedIcon />}
        descricao='Sobre'
      />
      <DetalhesSobre
        descricao={<>Uma das coisas que mais me entusiasma é a oportunidade de otimizar processos. Quando permitida ou incentivada pela gestão, mergulho de cabeça na busca por melhorias. Sou movida pela paixão de aprender constantemente, e essa mentalidade me impulsiona a me concentrar ao máximo nas minhas atividades.
        </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<AccountCircleOutlinedIcon />}
        descricao='Sobre'
      />
      <DetalhesSobre
        descricao={<>No trabalho em equipe, adoto inicialmente uma postura observadora e tranquila. Acredito na importância de compreender cada indivíduo da equipe, suas preferências de abordagem, comunicação e cultura. Por isso, no início, sou mais reservada, focando em realmente captar a essência única de cada membro do time. Ao longo do tempo, muitas vezes acabo assumindo a posição de líder, guiando e inspirando os demais.
        </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<AccountCircleOutlinedIcon />}
        descricao='Sobre'
      />
      <DetalhesSobre
        descricao={<>É importante mencionar que minha jornada profissional é influenciada pela minha condição neurodivergente. Sou diagnosticada com Transtorno do Espectro Autista (TEA) de alto funcionamento, grau 1. Essa condição traz consigo habilidades como hiperfoco, processamento avançado de dados, lógica, planejamento e organização. São características que, aliadas à minha paixão pela tecnologia, me impulsionam a alcançar resultados notáveis.
        </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<AccountCircleOutlinedIcon />}
        descricao='Sobre'
      />
      <DetalhesSobre
        descricao={<>Além disso, sou uma entusiasta da aprendizagem contínua. Estou sempre em busca de aprimorar meus conhecimentos nas diversas áreas do ramo de tecnologia. Acredito firmemente que ter um conhecimento abrangente, mesmo que não seja especialista em todas as áreas, fortalece os elos e estimula a cooperação entre os setores. Saber como um sistema operacional funciona, por exemplo, pode contribuir para melhorar o desempenho de um software que produzimos. Essa visão ampla me impulsiona a buscar constantemente novos aprendizados e a colaborar com colegas de diferentes especialidades.
        </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<AccountCircleOutlinedIcon />}
        descricao='Sobre'
      />
      <DetalhesSobre
        descricao={<>Com determinação e entusiasmo, estou pronta para enfrentar os desafios futuros e contribuir para um mundo impulsionado pela tecnologia, onde possamos alcançar grandes realizações juntos. Vamos além, rompendo barreiras e criando um futuro brilhante e promissor.
        <br />
        Obrigada por me acompanhar na leitura desta jornada!
        </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,

  ]
  return (
    <SwipeableDiv divs={divs} />
  )
}