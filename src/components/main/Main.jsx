import React from 'react'
import './main.css'
import ChangeArea from './ChangeArea'
import GetArea from './GetArea'


function Main(props) {
	return (

		<main className="App-main">
			<div className='title-block'>
				<div className='title'>Converter</div>
				<div className='date'>Date: 08.10.2022</div>
			</div>
			<div className='exchange-block'>
				<ChangeArea {...props}/>
				<GetArea {...props}/>
			</div>
		</main>


	);
}

export default Main