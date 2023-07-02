var express = require('express');
var router = express.Router();
var storage = require("../schema/schema");

//create
router.post("/creat-user", async (req,res) =>{
try {
    const aabb = new storage(req.body)
    const ccdd = await aabb.save()
    res.send(ccdd)
} catch (error) {
    res.send(error)
}
});

//read
router.get("/get-all", async (req,res) =>{
    try {
        const eeff = await storage.find({})
         res.send(eeff)
    } catch (error) {
        res.send(error)
    }
});

//update
router.put("/put-all/:id", async (req,res) =>{
    try {
        const gghh = await storage.findOneAndUpdate({ _id: req.params.id }, req.body,{ new: true})
        res.send(gghh)
    } catch (error) {
        res.send(error)
    }
});

//delete
router.delete("/delete-all/:id",async(req,res) =>{
try {
    const iijj = await storage.findOneAndDelete({ _id: req.params.id})
    res.send(iijj)
} catch (error) {
    res.send(error)
}
    
});

///GET
router.get("/getBy/:id",async(req,res) =>{
    try {
        const iijj = await storage.findById({ _id: req.params.id})
        res.send(iijj)
    } catch (error) {
        res.send(error)
    }
        
    });











    

module.exports = router