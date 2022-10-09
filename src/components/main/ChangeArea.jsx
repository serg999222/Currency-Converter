import React from 'react'
import './main.css'


function ChangeArea(props) {


	return (

		<div className='change-area'>
			You're giving
			<form className='change-area__form'>
				<input value={props.main.summChange} onChange={props.getValueEnteredSumm} type="text" placeholder='enter amount' />
				<select onChange={props.getNewCurrChange} name='currency' id='currency'>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
					<option value="UAH">UAH</option>
				</select>
			</form>

		</div>


	)
}



export default ChangeArea