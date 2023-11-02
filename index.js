import express from 'express';
import { flower } from './flowerPower.js';

const app=express();

function food(req,res,next){
    console.log(req);
    console.log("second middleware");
    next();
}

app.use((req,res,next)=>{
    console.log(req.method);
    console.log("first custom middleware");
    next();
})

app.use(food);
// app.use(flower); //dont do like this.

app.get("/",(req,res)=>{
    res.send("My Custom Middlewares");
});

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})