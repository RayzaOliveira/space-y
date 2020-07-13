import React from 'react'

import './index.css'

const Title = ({ children, tag }) => {
  // Operador Ternário: Se tag não for definida retorna h1
  // const Tag = tag === undefined ? 'h1' : tag
  const Tag = !tag ? 'h1' : tag

  return (
    <Tag className="text-title">
      {children}
    </Tag>
  )
}

export default Title 