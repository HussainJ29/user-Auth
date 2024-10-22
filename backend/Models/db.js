const mongoose  = require("mongoose")
const mongo_url = process.env.Mongo_Con;


mongoose.connect(mongo_url)
    .then(()=>{
        console.log("connection made sucessfuly....");
    })
    .catch((err)=>{
        console.log("could'nt connect....", err)
    })