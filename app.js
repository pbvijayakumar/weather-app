const request = require('request')
console.log("hi");

const url = 'http://api.weatherstack.com/current?access_key=89b5cb4b569076a22a2ff735929a96d6&query=11.394144, 77.506279'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})