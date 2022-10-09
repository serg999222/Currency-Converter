import React from 'react'
import { connect } from 'react-redux';
import Main from './Main'
import { setNewCurrChange, setNewSummChange, setNewCurrGet, setSummGet } from '../../redux/main-reducer'


function MainContainer(props) {

const resultСalculation = (currencyGetting, currencyGiving) => {
let compare = props.main.get === currencyGetting && props.main.change === currencyGiving
return compare
}

	let resultSumm = () => {
		if (resultСalculation("UAH", "USD")) {
			let result = props.main.summChange * +props.usd.buy
			props.setSummGet(result.toFixed(2))
		} else if (resultСalculation("UAH", "EUR")) {
			let result = props.main.summChange * +props.eur.buy
			props.setSummGet(result.toFixed(2))
		} else if (resultСalculation("USD", "UAH")) {
			let result = props.main.summChange / +props.usd.sale
			props.setSummGet(result.toFixed(2))
		} else if (resultСalculation("EUR", "UAH")) {
			let result = props.main.summChange / +props.eur.sale
			props.setSummGet(result.toFixed(2))		
		}else if (resultСalculation("UAH", "UAH")) {
			let result = props.main.summChange
			props.setSummGet(result)
		}else if (resultСalculation("EUR", "USD")) {
			let result = (props.main.summChange * +props.usd.buy)/+props.eur.sale
			props.setSummGet(result.toFixed(2))
		}else if (resultСalculation("USD", "EUR")) {
			let result = (props.main.summChange * +props.eur.buy)/+props.usd.sale
			props.setSummGet(result.toFixed(2))
		}else if (resultСalculation("USD", "USD")) {
			let result = props.main.summChange
			props.setSummGet(result)
		}else if (resultСalculation("EUR", "EUR")) {
			let result = props.main.summChange
			props.setSummGet(result)
		}
	}

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
			usd: state.currentExchange.allСurrency[0],
			eur: state.currentExchange.allСurrency[1]
		}
	}

	export default connect(mapStateToProps, { setNewCurrChange, setNewSummChange, setNewCurrGet, setSummGet })(MainContainer)