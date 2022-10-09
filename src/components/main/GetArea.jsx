import React, { useEffect } from 'react';



function GetArea(props) {
	useEffect(() => {
		props.resultSumm()
	}, [props])


	return (

		<div>
			You are getting
			<form className='get-area__form'>
				<span>{props.main.summGet}</span>
				<select onChange={props.getNewCurrGet} name='currency' id='currency'>
					<option value="UAH">UAH</option>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
				</select>

			</form>
		</div>


	)
}

export default GetArea