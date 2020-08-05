// ordem de importação: bibliotecas, componentes da aplicação, funções, constantes e arquivos estáticos(imagem, pdf..)

import React from 'react'
import { Link } from 'react-router-dom'

// lib para estilização do material-ui, neste caso o drawer
import { makeStyles } from '@material-ui/core'
import Drawer from "@material-ui/core/Drawer";

import imgLogo from '../../assets/images/logo-white.png'
import './index.css'
//Estrutura de JSX
const Header = () => {

	// esconde o header no evento de onScroll
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("navbar").style.top = "0";
			document.getElementById("navbar").style.backgroundColor = "#000";
		} else {
			document.getElementById("navbar").style.top = "-100px";
		}
		prevScrollpos = currentScrollPos;
	}
		 
	const classes = useStyles()
	// Define se o drawer está aberto ou fechado    
	const [state, setState] = React.useState(false);
	
	const toggleDrawer = open => event => {
		// condição de click fora do drawer
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
 
    setState(open);
  };

	return (

		// div: é o Header inteiro 
		<div id="navbar" className="container-header">
			{/* foi colocado <a href="/"> para colocar o <img> em uma rota */}
			{/* <a href>: foi trocado pelo <Limk to>*/}
			<Link to="/"><img className="logo-img" alt="Logo" src={imgLogo} /></Link>
			{/* tag <nav>: usado para navegação */}
			<nav id="menu">
				<ul>
					<li>
						<Link to="#">
							{/* <span>:para o texto, usado para que a borda inferior fique so no texto */}
							<span>Falcon 9</span>
						</Link>
					</li>
					<li>
						<Link to="#">
							<span>Falcon Heavy</span>
						</Link>
					</li>
					<li>
						<Link to="#">
							<span>Dragon</span>
						</Link>
					</li>
					<li>
						<Link to="#">
							<span>Starship</span>
						</Link>
					</li>
					<li>
						<Link to="/page-model">
							<span>Human Spaceflight</span>
						</Link>
					</li>
					<li>
						<Link to="#">
							<span>Rideshare</span>
						</Link>
					</li>
				</ul>
			</nav>	
			{/* tag <i>: usada para icones, caso aqui o bars 
			onClick: para abrir o Drawer*/}
			<i onClick={toggleDrawer(true)} className="fa fa-bars"/>
			{/* Componente Drawer */}
			<Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <div className={classes.drawer}>
					<div className="container-drawer">
						{/* botão do x, onClick={toggleDrawer(false)}: para fechar o drawer */}
						<i onClick={toggleDrawer(false)} className="fa fa-times"/>
						<ul>
							<li>
								<Link to="#">
									<span>MISSION</span>
								</Link>
							</li>
							<li>
								<Link to="#">
									<span>LAUNCHES</span>
								</Link>
							</li>
							<li>
								<Link to="#">
									<span>CAREERS</span>
								</Link>
							</li>
							<li>
								<Link to="#">
									<span>UPDATES</span>
								</Link>
							</li>
							<li>
								<Link to="#">
									<span>SHOP</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
      </Drawer>

		</div>
	)
}

export default Header

// confução criada para estilização de componentes do material-ui
const useStyles = makeStyles({
	drawer: {
		backgroundColor: '#000',
		height: '100%',
		color: '#fff',
		display: 'flex',
		// para x e o texto ficar em coluna
		flexDirection: 'column',
		padding: 50,
	}
})