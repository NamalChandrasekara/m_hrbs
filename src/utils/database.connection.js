import mongoose from "mongoose";
import logger from "./logger";
let database;
const connect =async ()=>{
    const MONGODB_URL=process.env.MONGODB_URL;
    //const MONGODB_URL = config.DB_CONNECTION_STRING;

    if(database) return;
    mongoose.connect(MONGODB_URL)
    .then((connection)=>{
        database=connection;
        logger.info("Database connectd");

    })
    .catch((err)=>{
        logger.error(err.message);
    });
}

export { connect };