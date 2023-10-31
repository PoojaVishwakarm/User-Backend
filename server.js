// impoting file here
const express=require('express');
const { connection } = require('./Database/connection');
const{UserRouter}=require('./Router/UserRouter');
require('dotenv').config();
const port=process.env.PORT||'9000';


const app=express();

app.use(express.json());

// app.use('',(req,res)=>{
//     res.send(" this is get method");
// });

app.use('/api',UserRouter);

app.listen(port,async()=>{
     try {
         await connection();
         console.log(" Database connected sucessfully");
     } catch (error) {
        console.log(error);
     };
     console.log(`server runing on ${port}`);
});
