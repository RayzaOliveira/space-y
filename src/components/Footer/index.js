import React from 'react'

import './index.css'

const Footer = () => {

  return (

    // Tag(HTML) para rodapé do site
    <footer className="root-footer">
      {/* tag ul: para lista de itens, li: para cada item, a: encaminhando para link */}
      <ul>
        {/* target="_blank": utilizado para encaminhar link para nova aba 
        rel="noopener noreferrer": propriedade necessária quando se utiliza o a propriedade: target="_blank"*/}
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rayza-oliveira-costa-482658129/">
            <i className="fa fa-linkedin"/>
            LinkedIn
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/rayzaoliveira">
          <i className="fa fa-github"/>
            GitHub
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oliveirarayza/">
          <i className="fa fa-instagram"/>
            Instagram
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/rayza_ocr">
          <i className="fa fa-twitter"/>
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer