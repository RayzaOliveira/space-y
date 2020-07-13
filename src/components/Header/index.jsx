import React from 'react'
import imgLogo from '../../assets/images/logo-white.png'

import './index.css'
//Estrutura de JSX
const Header = () => {

	return (
		<div className="container-header">
			<img className="logo-img" src={imgLogo} />
			<nav id="menu">
				<ul>
					<li><a href="#">Falcon 9</a></li>
					<li><a href="#">Falcon Heavy</a></li>
					<li><a href="#">Dragon</a></li>
					<li><a href="#">Starship</a></li>
					<li><a href="#">Human Spaceflight</a></li>
					<li><a href="#">Rideshare</a></li>
				</ul>
			</nav>	
		</div>
	)
}

export default Header
