import React from 'react'

import './index.css'

//paramentro para LinkButton

// propriedade dos componentes: texto no botão-children, rotas em route
const LinkButton = ({ children, route, className }) => {

  return (
    // <a className="link-button" href="#">
    //   UPDATE
    // </a>

    <a className={`link-button ${className}`} href={route}>
      <span>{children}</span>
    </a>
  )
}

export default LinkButton
