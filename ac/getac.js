"use strict";
exports.__esModule = true;
//import express module
//express module used to develop the rest apis
var express = require("express");
//import mongodb module
var mongodb = require("mongodb");
//create the client
var ac_client = mongodb.MongoClient;
//create the ac module (custom module)
var ac_module = express.Router().get("/", function (req, res) {
    ac_client.connect("mongodb+srv://admin:admin@ecommerce.imxpa.mongodb.net/ecom_db_cloud?retryWrites=true&w=majority", function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db("ecom_db_cloud");
            db.collection("ac_col").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
//export the ac_module
exports["default"] = ac_module;
