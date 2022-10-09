import React from 'react'
import './main.css'
import ChangeArea from './ChangeArea'
import GetArea from './GetArea'


function Main(props) {
	let date = new Date
	

	return (

		<main className="main">
			<div className='title-block'>
				<div className='title-block__title'>Converter</div>
				<div className='title-block__date'>{date.getDate()}.{date.getMonth()+1}.{date.getFullYear()}</div>
			</div>
			<div className='exchange-block'>
				<ChangeArea {...props}/>
				<GetArea {...props}/>
			</div>
		</main>


	);
}

export default Main