var express=require('express')
var app=express()

app.get('/thingNode', (req, res)=> {
    res.send('Hello World!')
    console.log("Hello")
})

//leave this untouched! 
app.listen(8001);