import { createSlice } from '@reduxjs/toolkit'
import reqestsApi from '../DAL/Api'

const currentExchangeReduser = createSlice({
	name: 'currentExchange',
	initialState: {
		allСurrency: [0,1]
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
			.then(response => {
				let data = response.data		
				dispatch(setCurrentExchenge(data))
			})
	}
}




export default currentExchangeReduser.reducer
export const { setCurrentExchenge } = currentExchangeReduser.actions