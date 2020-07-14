import React from 'react'

import LinkButton from '../../components/LinkButton'
import Section from '../../components/Section'
import Title from '../../components/Title'
import Content from '../../components/Content'
import Footer from '../../components/Footer'
import Header from '../../components/Header' 

import './index.css'

const Home = () => {

  return (
    <div id="page-home">

      <Header/>

      {/* exportando para componets/Section: o id da sessão e cor do fundo */}

      {/* <section className="section-1 default" > */}
      <Section id="1" alignment="bottom-left" color="#212529">

      {/* Componetizado para Content
        
        <div className="content-left"> */}
        <Content>

          <Title tag="h4">UPCOMING LAUNCH</Title>
          <Title>STARLINK MISSION</Title>

          <LinkButton route="https://www.google.com.br">
            UPDATE
          </LinkButton>

        </Content>

          {/* Componetizado para Title 

          <h4>
            UPCOMING LAUNCH
          </h4>
          <h1>
            STARLINK MISSION
          </h1> */}

          {/* exportado para o componet/LinkButton

          <a href="#">
          UPDATE
          </a> */}

        {/* </div> */}

      {/* </section> */}
      </Section>

      <Section id="2" alignment="bottom-right" color="#343a40">
        
        <Content>

          <Title>GPS III SPACE VEHICLE 03 MISSION</Title>

          <LinkButton route="https://www.google.com.br">
            REPLAY
          </LinkButton>

        </Content>
      </Section>

      <Section id="3" alignment="bottom-left" color="#495057">
        <Content>

          <Title>RETURNING HUMAN SPACEFLIGHT TO THE UNITED STATES</Title>

          <LinkButton route="https://www.google.com.br">
            LEARN MORE
          </LinkButton>

        </Content>
      </Section>

      <Section id="4" alignment="center-left" color="#6c757d">
        <Content>

          <Title>CREW DRAGON DOCKING SIMULATOR</Title>
          {/* Não foi necessário criar um componete para texto
          Foi utizado o span com a estilização padrão do HTML */}
          <Title tag="span">
            Crew Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary.
          </Title>

          <LinkButton route="https://www.google.com.br">
            TRY IT
          </LinkButton>

        </Content>
      </Section>

      <Section id="5" alignment="center-right" color="#adb5bd">
        <Content>

          <Title tag="h4">05/01/20</Title>
          <Title>NASA SELECTS LUNAR OPTIMIZED STARSHIP</Title>
          <Title tag="span">
          NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbit and the surface of the Moon as part of NASA’s Artemis program.
          </Title>

          <LinkButton route="https://www.google.com.br">
            LEARN MORE
          </LinkButton>

        </Content>
      </Section>
      {/* Rodapé do site */}
      <Footer />

    </div>
  )
}

export default Home
