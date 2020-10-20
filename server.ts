//this file is the main server file
//node starts the execution from server.ts file
//this file used to collabrate the modules
//@ac_module    @vm_module
//import express module
import * as express from "express";
//import cors module
import * as cors from "cors";
//create the rest object
let app = express();
//enable cors module
app.use(cors());
//import ac_module
import ac_module from "./ac/getac";
app.use("/ac", ac_module);
//import vm module
import vm_module from "./vm/getvm";
app.use("/vm", vm_module);

//create the rest api
app.get("/camera", (req, res) => {
    res.send({ "msg": "cameras come soon....!" });
});

//create the dummy api
app.get("/tvs", (req, res) => {
    res.send({ "msg": "tvs coming soon...!" })
});

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("server started");
});
