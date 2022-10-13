import { createSlice } from '@reduxjs/toolkit'
import reqestsApi from '../DAL/Api'

const currentExchangeReduser = createSlice({
	name: 'currentExchange',
	initialState: {
		allСurrency: [{cc:'USD', rate:1},{cc:'UAH', rate:1}]
	},


	reducers: {
		setCurrentExchenge(state, action){	
			state.allСurrency = action.payload
			
		}
	}
})

export const getCurrentExchenge = () => {
	return (dispatch) => {
		reqestsApi.setCurrentExchengeApi()
			.then(f => {		
				dispatch(setCurrentExchenge(f))
			})
	}
}

export default currentExchangeReduser.reducer
export const { setCurrentExchenge } = currentExchangeReduser.actions