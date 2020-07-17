import React from 'react'


import './index.css'

const Section = ({ children, id, imgBg, color, alignment,backgroundLess }) => {

  return (
    // interpolação de strings: inserindo uma variável no texto - id
    //parametrização do alinhamento: bottom-left, bottom-right, center-left, center-right  
    // parametrizando a cor do fundo
    <section  
      className={`section-${id} default ${alignment} ${backgroundLess ?'background-less':''}`} 
      style={{ 
        backgroundColor: color, 
        backgroundImage: `url(${imgBg})`,

      }}
    >
      {children}
    </section>
  )
}

export default Section
