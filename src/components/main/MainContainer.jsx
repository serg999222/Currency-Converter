import React from 'react'
import { connect } from 'react-redux';
import Main from './Main'
import { setNewCurrChange, setNewSummChange, setNewCurrGet, setSummGet } from '../../redux/main-reducer'


function MainContainer(props) {

	const resultСalculation = (currencyGetting, currencyGiving) => {
		let ss = [...props.allСurrency, ...[{ r030: 1, txt: " ", rate: 1, cc: "UAH", exchangedate: "13.10.2022" }]]		
		let g = ss.filter(item => {
			return item.cc === currencyGiving
		})
		let u = ss.filter(item => {
			return item.cc === currencyGetting
		})
		console.log(ss,u,g,u[0,g[0]])
	
		let result = (props.main.summChange / u[0].rate)*g[0].rate
		props.setSummGet(result.toFixed(2))			
	}

	let resultSumm = () => {
		resultСalculation(props.main.get, props.main.change)
	}

	// 	if (resultСalculation("UAH", "USD")) {
	// 		let result = props.main.summChange * +props.usd.rate
	// 		props.setSummGet(result.toFixed(2))
	// 	} else if (resultСalculation("UAH", "EUR")) {
	// 		let result = props.main.summChange * +props.eur.buy
	// 		props.setSummGet(result.toFixed(2))
	// 	} else if (resultСalculation("USD", "UAH")) {
	// 		let result = props.main.summChange / +props.usd.sale
	// 		props.setSummGet(result.toFixed(2))
	// 	} else if (resultСalculation("EUR", "UAH")) {
	// 		let result = props.main.summChange / +props.eur.sale
	// 		props.setSummGet(result.toFixed(2))		
	// 	}else if (resultСalculation("UAH", "UAH")) {
	// 		let result = props.main.summChange
	// 		props.setSummGet(result)
	// 	}else if (resultСalculation("EUR", "USD")) {
	// 		let result = (props.main.summChange * +props.usd.buy)/+props.eur.sale
	// 		props.setSummGet(result.toFixed(2))
	// 	}else if (resultСalculation("USD", "EUR")) {
	// 		let result = (props.main.summChange * +props.eur.buy)/+props.usd.sale
	// 		props.setSummGet(result.toFixed(2))
	// 	}else if (resultСalculation("USD", "USD")) {
	// 		let result = props.main.summChange
	// 		props.setSummGet(result)
	// 	}else if (resultСalculation("EUR", "EUR")) {
	// 		let result = props.main.summChange
	// 		props.setSummGet(result)
	// 	}
	// }

	let getNewCurrChange = (e) => {
		let listInputValue = e.target.value
		props.setNewCurrChange(listInputValue)
	}
	let getValueEnteredSumm = (e) => {
		let valueEnteredSumm = e.target.value
		props.setNewSummChange(valueEnteredSumm)
	}
	let getNewCurrGet = (e) => {
		let listInputValue = e.target.value
	
		props.setNewCurrGet(listInputValue)
	}

	return (
		<Main resultSumm={resultSumm} getNewCurrGet={getNewCurrGet} getNewCurrChange={getNewCurrChange} getValueEnteredSumm={getValueEnteredSumm} {...props} />
	);
}

const mapStateToProps = (state) => {
	return {
		main: state.main,
		allСurrency: state.currentExchange.allСurrency,
	}
}

export default connect(mapStateToProps, { setNewCurrChange, setNewSummChange, setNewCurrGet, setSummGet })(MainContainer)