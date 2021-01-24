
const request = require('request')
const forcast=(lat,long,callback)=>{
const weatherurl ='http://api.weatherstack.com/current?access_key=940da1f1678e830fd64e5393d2a09198&query='+lat+ ',' +long
request({url:weatherurl,json:true},(error,response)=>{
if(error){
callback('Unable to connect to location services',undefined)
}else if(response.body.error){
    callback('unable to find location',undefined)
}else {
    callback(undefined,"The weather Temperature is " + response.body.current.temperature + "-degrees"+ " but it feels like " + response.body.current.feelslike + " degrees outside", response.body.current.wind_dir,response.body.location.timezone_id)
  
}


})
}
module.exports= forcast
