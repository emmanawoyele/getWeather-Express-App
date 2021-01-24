const path = require('path')
const express =require('express')
const forecast =require('./utils/forecast')
const geocode=require('./utils/geocode')

// hbs need to be require to load partials
const hbs =require('hbs')
const app = express()
const port=process.env.PORT || 300
// Define paths for Express config
const publicDirectory= path.join(__dirname,'../public')
const templateView = path.join(__dirname, '../template/views')
const partialsPath =path.join(__dirname,'../template/partial')

// setting up handle bars for dynamic content partial
app.set('view engine', 'hbs')

app.set('views', templateView)

hbs.registerPartials(partialsPath)

// setting up static  and rendering index page
app.use(express.static(publicDirectory))

app.get('',(req,res)=>{
res.render('index',{
    title: 'weather App',
    name: 'Emmanuel Awoyele'
})
})



app.get('/about',(req,res)=>{
res.render('about',{
    title:'About us',
    name:'Fresh in the box'
})
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help page',
        created:'Emmanuel'
    })
    })
    

// app.get("/about.html",(req,res)=>{
// res.send([{
//     name:'Katie',
//     age:19
// },{
//     name:'Emmanuel',
//     age:29
// }])
// })

app.get("/Contact",(req, res)=>{
res.send("<h1>Contact</h1>")
})

app.get("/Weather",(req,res)=>{

    console.log(req.query)
    if(!req.query.location){
      res.send(  {error:"provide a valid location"})
    }
    else{
        geocode(req.query.location,(error,{latitude, longitude}={})=>{ 
       if(error){
          return  res.send({error})
       }forecast(latitude,longitude,(error,Forecastdata,wind,timezone_id)=>{
           if(error){
             res.send({error})
           }else{ res.send({
             Temp:Forecastdata,
            longitude: longitude,
            latitude:latitude,
            wind_dir:wind,
            timeZone:timezone_id,
            address:req.query.location,
           

        })}
       })
        })

       
        // data.render({
        //     location:'Hailsham',
        //     Forecast:145 + "degress",
        //     address: req.query.location
            
        // })
    }

})

app.get("/product",(req, res)=>{
    if(!req.query.adult){
        // the code below can be written as return res.send({}) without the else
        res.send({
            error:"Provide right search term"        
        })
    }else{
    console.log(req.query.adult)
res.send({
    products:[
        stable={
            rice:"beans"
        }
    ]
})}
})

app.get("/help/*",(req,res)=>{
res.render('404',{
    title:"404 page",
    name:"Kunle Awoyele",
    errorMessage:'there is no such thing'
})
})

app.get("*",(req,res)=>{
res.render("404",{
title:'404 page',
name:'Emmanuele Awoyele',
errorMessage:"page not found"
})

})

app.listen(port,()=>{
    console.log("Server is up on" + " port ")
})