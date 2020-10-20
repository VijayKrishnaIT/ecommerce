//import express module
//express module used to develop the rest apis
import * as express from "express";

//import mongodb module
import * as mongodb from "mongodb";

//create the client
let ac_client = mongodb.MongoClient;


//create the ac module (custom module)
let ac_module = express.Router().get("/",(req,res)=>{
    ac_client.connect("mongodb+srv://admin:admin@ecommerce.imxpa.mongodb.net/ecom_db_cloud?retryWrites=true&w=majority",(err,client)=>{
        if(err) throw err;
        else{
            let db = client.db("ecom_db_cloud");
            db.collection("ac_col").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});

//export the ac_module
export default ac_module;
