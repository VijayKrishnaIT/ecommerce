import * as express from "express";
import * as mongodb from "mongodb";
let vm_client = mongodb.MongoClient;
let vm_module = express.Router().get("/",(req,res)=>{
    vm_client.connect("mongodb+srv://admin:admin@ecommerce.imxpa.mongodb.net/ecom_db_cloud?retryWrites=true&w=majority",(err,client)=>{
        if(err) throw err;
        else{
            let db = client.db("ecom_db_cloud");
            db.collection("washing_col").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});
export default vm_module;