import React from 'react'
import imgLogo from '../../assets/images/logo-white.png'

// lib para estilização do material-ui, neste caso o drawer
import { makeStyles, Container } from '@material-ui/core'
import Drawer from "@material-ui/core/Drawer";

import './index.css'
//Estrutura de JSX
const Header = () => {
		 
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
		<div className="container-header">
			{/* foi colocado <a href="/"> para colocar o <img> em uma rota */}
			<a href="/"><img className="logo-img" src={imgLogo} /></a>
			{/* tag <nav>: usado para navegação */}
			<nav id="menu">
				<ul>
					<li>
						<a href="#">
							{/* <span>:para o texto, usado para que a borda inferior fique so no texto */}
							<span>
							Falcon 9
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>
							Falcon Heavy
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>
							Dragon
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>
							Starship
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>
							Human Spaceflight
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>
							Rideshare
							</span>
						</a>
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
						{/* botão do x */}
						<i className="fa fa-times"/>
						<ul>
							<li>
								<a href="#">
									<span>
										MISSION
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>
										LAUNCHES
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>
										CAREERS
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>
										UPDATES
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>
										SHOP
									</span>
								</a>
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