const express = require('express')
const router = express.Router()
const fs = require("fs")
const path = require("path")
const download_confirmToken = require("../middleware/download_confirmToken")
router.get('/api/downloadDb',download_confirmToken,(req,res) =>{
	res.download(path.join(__dirname,"../db/copyDownload/dbCopy.zip"),(err)=>{
		if(err){
			res.status(500).end()
		}else{
            res.status(200).end()
        }
	})
})

module.exports = router