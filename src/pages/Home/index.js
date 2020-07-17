import React from 'react'

import LinkButton from '../../components/LinkButton'
import Section from '../../components/Section'
import Title from '../../components/Title'
import Content from '../../components/Content'

import imgBg1 from '../../assets/images/starlinkstreak_desktop.png'
import imgBg2 from '../../assets/images/gps3_launch_desktop_02.png'
import imgBg3 from '../../assets/images/home_demo2.png'
import imgBg5 from '../../assets/images/home_moon.png'


import './index.css'

const Home = () => {

  return (
    <div id="page-home">

      {/* <Header/> : foi tranferido para ser compartilhado entre todas as rotas */}

      {/* exportando para componets/Section: o id da sessão e cor do fundo */}

      {/* <section className="section-1 default" > */}
      <Section id="1" alignment="bottom-left" imgBg={imgBg1}>

      {/* Componetizado para Content
        
        <div className="content-left"> */}
        <Content>

          <Title tag="h4">UPCOMING LAUNCH</Title>
          <Title>STARLINK MISSION</Title>

          <LinkButton route="/page-model">
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

      <Section id="2" alignment="bottom-right" imgBg={imgBg2}>
        
        <Content>

          <Title>GPS III SPACE VEHICLE 03 MISSION</Title>

          <LinkButton route="https://youtu.be/6zr0nfG3Xy4/">
            REPLAY
          </LinkButton>

        </Content>
      </Section>

      <Section id="3" alignment="bottom-left" imgBg={imgBg3}>
        <Content>

          <Title>RETURNING HUMAN SPACEFLIGHT TO THE UNITED STATES</Title>

          <LinkButton route="/page-model">
            LEARN MORE
          </LinkButton>

        </Content>
      </Section>

      <Section id="4" alignment="center-left">
        <Content>

          <Title>CREW DRAGON DOCKING SIMULATOR</Title>
          {/* Não foi necessário criar um componete para texto
          Foi utizado o span com a estilização padrão do HTML */}
          <Title tag="span">
            Crew Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary.
          </Title>

          <LinkButton route="https://iss-sim.spacex.com/">
            TRY IT
          </LinkButton>

        </Content>

        <video className="video-simulator" width="50%" autoPlay loop muted>
          <source src="https://www.spacex.com/media/iss_docking_sim.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>


      </Section>

      <Section id="5" alignment="center-right" imgBg={imgBg5}>
        <Content>

          <Title tag="h4">05/01/20</Title>
          <Title>NASA SELECTS LUNAR OPTIMIZED STARSHIP</Title>
          <Title tag="span">
          NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbit and the surface of the Moon as part of NASA’s Artemis program.
          </Title>

          <LinkButton route="/page-model">
            LEARN MORE
          </LinkButton>

        </Content>
      </Section>
      {/* Rodapé do site: foi tranferido para ser compartilhado entre todas as rotas 
      <Footer /> */}

    </div>
  )
}

export default Home
