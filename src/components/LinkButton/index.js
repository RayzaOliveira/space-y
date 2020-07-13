import React from 'react'

import './index.css'

//paramentro para LinkButton

// propriedade dos componentes: texto no botão-children, rotas em route
const LinkButton = ({ children, route }) => {

  return (
    // <a className="link-button" href="#">
    //   UPDATE
    // </a>

    <a className="link-button" href={route}>
      {children}
    </a>
  )
}

export default LinkButton
