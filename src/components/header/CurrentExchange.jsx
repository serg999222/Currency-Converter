import React from 'react'
import './header.css'



function CurrentExchange(props) {
	return (
		<div className='current-exchange'>
			<div className='current-exchange__usd current'>
				<span className='current__label'>usd</span>
				<span className='current__buy'> buy {props.state[0].rate}</span>
				<span className='current__sale'> sale: {props.state[0].rate}</span>
			</div>
			<div className='current-exchange__eur current'>
				<span className='current__label'>eur</span>
				<span className='current__buy'> buy {props.state[1].rate}</span>
				<span className='current__sale'> sale: {props.state[1].rate}</span>
			</div>
		</div>
	);
}

export default CurrentExchange;