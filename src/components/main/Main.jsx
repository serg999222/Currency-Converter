import React from 'react'
import './main.css'
import ChangeArea from './ChangeArea'
import GetArea from './GetArea'


function Main(props) {
	return (

		<main className="main">
			<div className='title-block'>
				<div className='title-block__title'>Converter</div>
				<div className='title-block__date'>Date: 08.10.2022</div>
			</div>
			<div className='exchange-block'>
				<ChangeArea {...props}/>
				<GetArea {...props}/>
			</div>
		</main>


	);
}

export default Main