import React from "react";
import axios from "axios";




const reqestsApi = {

	setCurrentExchengeApi() {
		 return axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
			.then(response => {
				let currensyes = {0:'USD', 1:'EUR'}
				
				let f = response.data.filter(item =>{
					for(let k in currensyes) {
						if(currensyes[k] == item.cc ){
							return true
						}
					}
				})				
			return f	
			})
	}
}

export default reqestsApi