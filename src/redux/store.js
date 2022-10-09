import { configureStore, combineReducers} from '@reduxjs/toolkit'
import currentExchangeReduser from '../redux/currentExchenge-reducer'
import mainReducer from './main-reducer'

let redusers =  combineReducers({
	currentExchange:currentExchangeReduser,
	main:mainReducer


}) 


let store = configureStore({
	reducer: redusers
})


window.store = store

export default store