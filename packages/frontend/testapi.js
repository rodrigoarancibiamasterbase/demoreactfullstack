const axios = require('axios');


const options = {
    method: 'GET',
    url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-chart',
    params: {
      interval: '1mo',
      symbol: 'AMRN',
      range: '5y',
      region: 'US',
      includePrePost: 'false',
      useYfid: 'true',
      includeAdjustedClose: 'true',
      events: 'capitalGain,div,split'
    },
    headers: {
      'X-RapidAPI-Key': '8b2052a755mshd405af611b664dap1a898bjsnbc1a671d0dee',
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    }
  };
  const fs=require("fs");

(async ()=>{
try {
	const response = await axios.request(options);
    fs.writeFileSync("./result.json",JSON.stringify(response.data));
} catch (error) {
	console.error(error);
}
})()
