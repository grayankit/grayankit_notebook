const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/notebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connection Sceed!")
    })
}
module.exports = connectToMongo;
