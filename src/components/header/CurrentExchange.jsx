import React from 'react'
import './header.css'



function CurrentExchange(props) {
	return (
		<div className='current-exchange'>
			<div className='current-usd'>
				<span className='current__label'>usd</span>
				<span className='current__buy'> buy {props.state[0].buy}</span>
				<span className='current__sale'> sale: {props.state[0].sale}</span>
			</div>
			<div className='current-eur'>
				<span className='current__label'>eur</span>
				<span className='current__buy'> buy {props.state[1].buy}</span>
				<span className='current__sale'> sale: {props.state[1].sale}</span>
			</div>
		</div>
	);
}

export default CurrentExchange;