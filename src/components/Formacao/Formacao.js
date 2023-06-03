import SwipeableDiv from "../SwipeableDiv"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import TituloSwipeableDiv from "../TituloSwipeableDiv"
import DetalhesFormacao from "../DetalhesFormacao"
import DetalhesCurso from "../DetalhesCurso"

export const Formacao = () => {
  const divs = [
    <>
      <TituloSwipeableDiv
        icon={<SchoolOutlinedIcon />}
        descricao='Formação'
      />
      <DetalhesFormacao
        img='https://www.faculdademetropolitana.edu.br/wp-content/uploads/2021/10/icon.png'
        curso='Gestão de Projetos'
        instituicao='Faculdade Metropolitana'
        diploma='Pós Lato Sensu - Especialização'
        status='Cursando'
      />
      <DetalhesFormacao
        img='https://site.ucdb.br//public/eventos/1018101-logo-ucdb-2.png'
        curso='Análise e Desenv. de Sistemas'
        instituicao='Universidade Católica Dom Bosco'
        diploma='Graduação Tecnológica'
        status='Concluído, mai/23'
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<SchoolOutlinedIcon />}
        descricao='Cursos'
      />
      <DetalhesCurso
        img='https://img.freepik.com/icones-gratis/procurar_318-265146.jpg'
        curso='Suporte em TI do Google'
        instituicao='Coursera'
        detalhes='Certificado Profissional'
        carga='300 horas'
        status='Cursando'
      />
      <DetalhesCurso
        img='https://img.freepik.com/icones-gratis/procurar_318-265146.jpg'
        curso='Análise de dados do Google'
        instituicao='Coursera'
        detalhes='Certificado Profissional'
        carga='370 horas'
        status='Cursando'
      />
      <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
    </>,
    <>
      <TituloSwipeableDiv
        icon={<SchoolOutlinedIcon />}
        descricao='Cursos'
      />
      <DetalhesCurso
        img='https://img.freepik.com/icones-gratis/procurar_318-265146.jpg'
        curso='Design de UX do Google'
        instituicao='Coursera'
        detalhes='Certificado Profissional'
        carga='330 horas'
        status='Cursando'
      />
      <DetalhesCurso
        img='https://img.freepik.com/icones-gratis/procurar_318-265146.jpg'
        curso='Gestão de projetos do Google'
        instituicao='Coursera'
        detalhes='Certificado Profissional'
        carga='270 horas'
        status='Concluído, jan/23'
      />
    <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
  </>,
  <>
    <TituloSwipeableDiv
      icon={<SchoolOutlinedIcon />}
      descricao='Cursos'
    />
    <DetalhesCurso
      img='https://logopng.com.br/logos/ifood-43.png'
      curso={<>Bootcamp Potência Tech<br/>powered by iFood</>}
      instituicao='dio'
      detalhes='Bootcamp'
      carga='91 horas'
      status='Concluído, nov/22'
    />
    <DetalhesCurso
      img='https://companieslogo.com/img/orig/ORCL-d5a587ae.png?t=1633210264'
      curso={<>Programa Oracle Next<br/>Education Front-End - React</>}
      instituicao='Alura'
      detalhes='Certificado de Conclusão'
      carga='333 horas'
      status='Concluído, mai/23'
    />
    <p className='apenas-mobile' style={{fontSize: '0.5rem'}}>navegue pelos botões ou arraste para os lados</p><br/>
  </>,

  ]
  return (
    <SwipeableDiv divs={divs} />
  )
}