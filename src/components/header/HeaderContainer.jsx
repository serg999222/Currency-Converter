import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getCurrentExchenge } from '../../redux/currentExchenge-reducer'
import Header from './Header'




function HeaderContainer(props) {
	useEffect(() => {
		props.getCurrentExchenge()
		// setInterval(props.getCurrentExchenge, 50000)
	}, [])

	return (
		<Header {...props} />
	);
}

const mapStateToProps = (state) => {
	return {
		state: state.currentExchange.allСurrency
	}
}

export default connect(mapStateToProps, { getCurrentExchenge })(HeaderContainer)