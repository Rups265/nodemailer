const express = require("express");
const app= express();
const MailRouter=require("./routers/mailRouters");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 7000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1",MailRouter);

app.listen(port,()=>{
    console.log(`server is running on port number : ${port}`);
});
