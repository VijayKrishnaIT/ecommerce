"use strict";
exports.__esModule = true;
//this file is the main server file
//node starts the execution from server.ts file
//this file used to collabrate the modules
//@ac_module    @vm_module
//import express module
var express = require("express");
//import cors module
var cors = require("cors");
//create the rest object
var app = express();
//enable cors module
app.use(cors());
//import ac_module
var getac_1 = require("./ac/getac");
app.use("/ac", getac_1["default"]);
//import vm module
var getvm_1 = require("./vm/getvm");
app.use("/vm", getvm_1["default"]);
//create the rest api
app.get("/camera", function (req, res) {
    res.send({ "msg": "cameras come soon....!" });
});
//create the dummy api
app.get("/tvs", function (req, res) {
    res.send({ "msg": "tvs coming soon...!" });
});
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("server started");
});
