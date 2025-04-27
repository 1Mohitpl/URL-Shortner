const express = require("express");
const urlRoute = require("./Routes/rots");
const {connectDB } = require("./Connect");
const { serverConfig } = require("./config");
const app = express();

app.use(express.json());
// coneecting with mongodb

app.use('/url', urlRoute); // to parse the json into database

connectDB()
.then(() => {
    console.log("database connection established");
    app.listen(serverConfig.PORT, () => {
        console.log(`server started at port : ${serverConfig.PORT}`);
        
    })
    
})
.catch((err) =>{
    console.log(`error : ${err}`);

});




