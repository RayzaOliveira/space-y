// comando para criar jsx basico: rfce
import React from 'react'

import LinkButton from '../../components/LinkButton'
import Section from '../../components/Section'
import Title from '../../components/Title'
import Content from '../../components/Content'

import imgBg1 from '../../assets/images/human_spaceflight_feature.png'
import imgBg2 from '../../assets/images/human_spaceflight_earth.png'
import imgBg3 from '../../assets/images/human_spaceflight_iss.png'
import imgBg4 from '../../assets/images/human_spaceflight_moon.png'
import imgBg5 from '../../assets/images/human_spaceflight_mars.png'

import './index.css'

// mesma função do const Home = () => { , so q escrito diferente
function PageModel() {
  return (
    <div id="page-model">
      <Section id="0" alignment="center" imgBg={imgBg1}>
        <Content center={true}>
          <Title big={true}>HUMAN SPACEFLIGHT</Title>
          <Title tag="h4">MAKING LIFE MULTIPLANETARY</Title>
        </Content>
      </Section>

      <Section backgroundLess={true} alignment="center">
        <Content center={true}>
          <Title tag="h4">SpaceX’s family of launch vehicles and spacecraft were designed from the beginning to take humans to Earth orbit, the Moon, Mars and beyond.</Title>
          <LinkButton className="button-custom" route="/">
              VIEW OUR NASA DEMO-2 MISSION
            </LinkButton>
        </Content>
      </Section>

      <Section id="2" alignment="bottom-right" imgBg={imgBg2}>
        <Content>
          <Title tag="h4">MISSION</Title>
          <Title>EARTH ORBIT</Title>
          <Title tag="h4">EXPERIENCE THE BLUE PLANET FROM OVER 300KM UP</Title>
            <LinkButton route="/">
              EXPLORE
            </LinkButton>
        </Content>
      </Section>

      <Section id="3" alignment="bottom-left" imgBg={imgBg3}>
        <Content>
          <Title tag="h4">MISSION</Title>
          <Title>SPACE STATION</Title>
          <Title tag="h4">TRANSPORTING HUMANS TO THE ORBITING LABORATORY IN THE SKY</Title>

            <LinkButton route="/">
              EXPLORE
            </LinkButton>
        </Content>
      </Section>

      <Section id="4" alignment="bottom-right" imgBg={imgBg4}>
        <Content>
          <Title tag="h4">MISSION</Title>
          <Title>MOON</Title>
          <Title tag="h4">RETURNING HUMANS TO OUR LUNAR NEIGHBOR</Title>

            <LinkButton route="/">
              EXPLORE
            </LinkButton>
        </Content>
      </Section>

      <Section id="5" alignment="bottom-left" imgBg={imgBg5}>
        <Content>
          <Title tag="h4">MISSION</Title>
          <Title>MARS & BEYOND</Title>
          <Title tag="h4">THE ROAD TO MAKING HUMANITY MULTIPLANETARY</Title>

            <LinkButton route="/">
              EXPLORE
            </LinkButton>
        </Content>
      </Section>

      <Section backgroundLess={true} alignment="center">
        <Content center={true}>
          <Title tag="span">
          Clone of the SpaceX website. For more information: rayza.ocr@gmail.com
          </Title>
            <LinkButton route="mailto:rayza.ocr@gmail.com">
              <i className="fa fa-envelope-o"/>
            </LinkButton>
        </Content>
      </Section>

    </div>
  )
}

export default PageModel
