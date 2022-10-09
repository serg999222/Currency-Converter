import React from 'react'
import './header.css'
import logo from '../../Img/Logo.png'
import CurrentExchange from './CurrentExchange'


function Header(props) {
	
	return (

		<header className="App-header">
			<div className='Logo'><img src={logo} alt="" /><span className='Logo__text'> Currency Converter</span></div>
		   <CurrentExchange {...props}/>

		</header>


	);
}

export default Header;