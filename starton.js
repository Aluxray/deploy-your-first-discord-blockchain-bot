require('dotenv').config()
console.log(process.env.STARTON_API_KEY)
const axios = require("axios")

const axiosInstance = axios.create({
	baseURL: "https://api.starton.io",
	headers: {
		"x-api-key": process.env.STARTON_API_KEY,
	},
})

axiosInstance.post(
	"/v3/smart-contract/polygon-mumbai/0x8200673d3801B59b39d9946dCD0B4850513B8F57/read",
	{
		functionName: "symbol",
		params: []
	}
).then((response) => {
	console.log(response.data)
})
