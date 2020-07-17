import React from 'react'

import './index.css'

const Content = ({ children, center }) => {

  return (
    <div 
      className={`section-content-default ${center ?'center':''}`}>
      {children}
    </div>
  )
}

export default Content