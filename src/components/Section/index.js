import React from 'react'

import './index.css'

const Section = ({ children, id, color, alignment }) => {

  return (
    // interpolação de strings: inserindo uma variável no texto - id
    //parametrização do alinhamento: bottom-left, bottom-right, center-left, center-right  
    // parametrizando a cor do fundo
    <section  
      className={`section-${id} default ${alignment}`} 
      style={{ backgroundColor: color }}
    >
      {children}
    </section>
  )
}

export default Section
