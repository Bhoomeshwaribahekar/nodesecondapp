const express = require('express');
const mongoose = require("mongoose");


// require("./db/db");
const route = require("./route/route")
const schema = require("./schema/schema")

mongoose
  .connect("mongodb://127.0.0.1:27017/sonu", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("database connected");
  })
  .catch(err => {
    console.log("Could not connect", err);
  });
const app = express();
const port = 3000;
app.use(express.json());
app.use(route)                                                                       





app.listen(port,()=>{
    console.log(`connection successfully ${port}`)
})