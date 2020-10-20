"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var vm_client = mongodb.MongoClient;
var vm_module = express.Router().get("/", function (req, res) {
    vm_client.connect("mongodb+srv://admin:admin@ecommerce.imxpa.mongodb.net/ecom_db_cloud?retryWrites=true&w=majority", function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db("ecom_db_cloud");
            db.collection("washing_col").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
exports["default"] = vm_module;
