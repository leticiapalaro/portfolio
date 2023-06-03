import SwipeableDiv from "../SwipeableDiv"
import TituloSwipeableDiv from "../TituloSwipeableDiv"
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { DetalhesExperienciaProfissional } from "../DetalhesExperienciaProfissional/DetallhesExperienciaProfissional";

export const ExperienciaProfissional = () => {
  const divs = [
    <>
      <TituloSwipeableDiv
        icon={<WorkOutlineOutlinedIcon />}
        descricao='Experiência'
      />
      <DetalhesExperienciaProfissional
        cargo='Agente Censitário Operacional de TI'
        empresa='IBGE'
        periodo='jan/2020 - nov/2022'
        descricao={<>Durante meu tempo de trabalho, tive a oportunidade de atuar em diversas áreas, incluindo a montagem e manutenção de computadores, bem como o suporte de usuário N1 através de diferentes canais, como sistema de chamados, presencialmente, por e-mail e pelo WhatsApp. Além disso, fui responsável pela organização e controle dos patrimônios, desde o recolhimento até a manutenção, armazenamento e distribuição dos mesmos, e pela configuração dos ramais de telefonia VOIP.</>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<WorkOutlineOutlinedIcon />}
        descricao='Experiência'
      />
      <DetalhesExperienciaProfissional
        cargo='Supervisão de Pesquisa'
        empresa='IBGE'
        periodo='ago/2020 - dez/2020'
        descricao={<>Durante a pandemia, em uma pesquisa de temporária de urgência, fui convocada a exercer o cargo de supervisora. Nessa função, realizei a revisão dos relatórios de pesquisa, controle da produção, quebra de recusas e orientação a resultados, garantindo que todas as etapas da pesquisa fossem realizadas com eficiência e precisão. Essa experiência me permitiu aprimorar minhas habilidades de liderança, organização e comunicação, além de me mostrar a importância do trabalho em equipe e da adaptação a situações adversas.</>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<WorkOutlineOutlinedIcon />}
        descricao='Experiência'
      />
      <DetalhesExperienciaProfissional
        cargo='Supervisão de Atendimento'
        empresa='Royal Pizzas'
        periodo='abr/2016 - jan/2020'
        descricao={<>
          Durante o período em que trabalhei, desempenhei diversas funções, incluindo supervisão da equipe de atendimento, atendimento de pedidos pelo WhatsApp, logística de entregas, fechamento de caixa, elaboração de relatórios financeiros, gerenciamento de publicidade e resolução de conflitos.
          </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<WorkOutlineOutlinedIcon />}
        descricao='Experiência'
      />
      <DetalhesExperienciaProfissional
        cargo='Auxiliar Administrativo'
        empresa='Officecom'
        periodo='ago/2011 - abr/2016'
        descricao={<>
          Durante minha experiência profissional, minhas principais funções envolviam a abertura e finalização de Ordens de Serviço, logística dos suprimentos das impressoras, relatórios de rendimento e suporte ao cliente por telefone, e-mail ou skype, com relação ao uso ou falhas mais simples no equipamento.
          <br/><br/>
          Também era responsável por realizar a leitura mensal do contador de páginas dos equipamentos, bem como pelos relatórios e controle das franquias e excedentes.
          </>}
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,

  ]
  return (
    <SwipeableDiv divs={divs} />
  )
}