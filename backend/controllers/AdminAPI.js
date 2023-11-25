const express = require('express');
const router = express.Router();
const NoteModel = require("../models/Note_Schema.js")
const path=require('path')

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
        currencyName: req.body.description,
        denomination: req.body.denomination,
        frontSide: req.files.frontSide[0].filename,
        backside: req.files.backside[0].filename,
    })
    NoteModel.find({countryName: req.body.countryName})
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

module.exports = router;