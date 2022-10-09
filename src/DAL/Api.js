import React from "react";
import axios from "axios";



const reqestsApi = {

	setCurrentExchengeApi() {
		return axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
			.then(response => {
				return response
			})
	}
}

export default reqestsApi