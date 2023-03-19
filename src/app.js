import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import 'dotenv/config'
import {connect} from "./utils/database.connection"


const app = express();
const PORT = process.env.PORT || "8090";
app.use(cors());
app.use(express.json({limit:"20mb"}));


app.get("/",(req, res, next)=>{
    res.send("<h2> Hotel room Booking system</h2>");
    next();
}
);

 
const roomRouter = require("../routes/rooms.js");
app.use("/rooms",roomRouter);

app.listen(PORT,()=>{
    logger.info("This is testing");
    console.log('server is up and running on PORT ',PORT);
    connect();

});