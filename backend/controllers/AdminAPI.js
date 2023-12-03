const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const NoteModel = require("../models/Note_Schema.js")
const AdminModel=require("../models/admin_schema.js")
const path=require('path')
const { v4: uuidv4 } = require('uuid');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const customDestination = path.join(__dirname,"../..","frontend/src/assets/");
        cb(null, customDestination)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })
var multipleUpload = upload.fields([{ name: 'countryFlag' , maxCount:1}, { name: 'frontSide',maxCount:1 }, { name: 'backside',maxCount:1 }])

router.post('/addNote', multipleUpload, (req, res) => {
    const noteObj = new NoteModel({
        countryName: req.body.countryName,
        countryFlag: req.files.countryFlag[0].filename,
        description: req.body.description,
        currencyName: req.body.currencyName,
        denomination: req.body.denomination,
        frontSide: req.files.frontSide[0].filename,
        backside: req.files.backside[0].filename,
        uniqueId:req.body.countryName+req.body.currencyName+req.body.denomination+uuidv4()
    })
    NoteModel.find({uniqueId:req.body.countryName+req.body.currencyName+req.body.denomination+uuidv4()})
    .then((result)=>{
        if(result.length>0){
            res.send([])
        }
        else{
            noteObj.save()
            .then((result)=>{
                res.send([result])
            }).catch((err)=>{
                console.log({ message: err.message })
            })
        
        }
    }).catch((err)=>{
        console.log({ message: err.message })
    })
})


router.get('/showNotes',(req,res)=>{
    NoteModel.find()
    .then((result)=>{
        if(result.length>0){
            res.send(result)
        }
        else{
            res.send([])
        }
    }).catch((err)=>{
        console.log({ message: err.message })
    })
})

router.get('/search/:countryName', (req,res)=>{
    
    NoteModel.find({countryName:req.params.countryName})
    .then((result)=>{
        if(result.length>0){
            res.send(result)
        }
        else{
            res.send([])
        }
    }).catch((err)=>{
        console.log({ message: err.message })
    })

})
router.post('/adminreg', (req, res) => {
    bcrypt.hash(req.body.adminPassword, 10)
        .then((encpass) => {
            const adminObj = new AdminModel({
                adminEmail: req.body.adminEmail,
                adminPassword: encpass,

            })
            AdminModel.find({ $or: [{ adminEmail: req.body.adminEmail }, { adminPhone: req.body.adminPhone }] })
                .then((result) => {
                    if (result.length > 0) {
                        res.send([])
                    }
                    else {
                        adminObj.save()
                            .then((result) => {
                                res.send([result])
                            }).catch((err) => {
                                console.log({ message: err.message })
                            })
                    }
                }).catch((err) => {
                    console.log({ message: err.message })
                })
        })

})
router.post("/adminlogin", (req, res) => {
    AdminModel.find({ adminEmail: req.body.adminEmail })
        .then((result) => {
            if (result.length > 0) {
                let collectedPass = req.body.adminPassword;
                let storedPass = result[0].adminPassword;
                bcrypt.compare(collectedPass, storedPass)
                    .then((passMatch) => {
                        if (passMatch == true) {
                            res.send(result)
                        }
                        else {
                            res.send([])
                        }
                    }).catch((err) => {
                        console.log({ message: err.message })
                    })
            }
            else {
                res.send([])
            }
        }).catch((err) => {
            console.log({ message: err.message })
        })
})
module.exports = router;