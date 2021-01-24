

var weatherForm = document.querySelector("form")
var searchValue = document.querySelector("input")
var Temp_1 = document.querySelector("#message1")
var Temp_2 = document.querySelector("#message2")
var Temp_3 = document.querySelector("#message3")
var Temp_4 = document.querySelector("#message4")
var Temp_5 = document.querySelector("#message5")
var Temp_6 = document.querySelector("#message6")
var Temp_7 = document.querySelector("#message7")
console.log(Temp_1)
weatherForm.addEventListener('submit',function(e){
e.preventDefault()
const getSearch= searchValue.value
Temp_1.textContent= 'Loading...'
console.log(getSearch)
var weatherApi =fetch('/Weather?location='+getSearch).then((response)=>{
    
response.json().then((data)=>{
    if(data.error){
        return Temp_1.textContent=data.error
       
    }else
    Temp_1.textContent=""
    {Temp_2.textContent="Temp:" + data.Temp}
    
       
    {Temp_3.textContent="lat:"+data.latitude}
    {Temp_4.textContent="lon:" +data.longitude}
    {Temp_5.textContent="LocalTime:"+data.timeZone}
    {Temp_6.textContent="Pressure:"+data.pressure}
    {Temp_7.textContent="wind direction:"+data.wind_dir}
    console.log(data)

    // var weatherResponse =document.createElement('ul')
    // var list = document.createElement('li')
    // var ult = weatherResponse.append(list)
    // var texts =createTextNode(data.location.country)
   
    // ult.append(texts)
    // Temp.append(ult)
    
    
})

})


})

