import { createSlice } from '@reduxjs/toolkit'


const mainReducer = createSlice({
	name: 'main',
	initialState: {
		change:'USD',
		get: 'UAH',
		summChange:100,
		summGet:0

	},


	reducers: {
		setNewCurrChange(state, action){		
			state.change = action.payload
			
		},
		setNewSummChange(state, action){		
			state.summChange = action.payload
			
		},
		setNewCurrGet(state, action){
			state.get = action.payload
		},
		setSummGet(state, action){
			state.summGet = action.payload
		}
	}
})

// export const getCurrentExchenge = () => {
// 	return (dispatch) => {
// 		reqestsApi.setCurrentExchengeApi()
// 			.then(response => {
// 				let data = response.data		
// 				dispatch(setCurrentExchenge(data))
// 			})
// 	}
// }




export default mainReducer.reducer
export const { setNewCurrChange,setNewSummChange, setNewCurrGet,setSummGet } = mainReducer.actions