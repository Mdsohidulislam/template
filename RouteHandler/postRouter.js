const express = require('express');
const postRouter = express.Router(); 

const fs = require('fs')

postRouter.post('/post',(req, res) => { 
    const file = req.files.file;
    const path = `${__dirname}/images/${file.name}`;
    file.mv(path,(err)=>{
        if(err){
            console.log(err);
            return res.status(203).send('file upload error')
        }

        // const newImg = fs.readFileSync(path);
        // const encImg = newImg.toString('base64');
        // const img = Buffer(encImg, 'base64');

        

        return res.status(200).send('successfully file uploaded')
    }) 
})

module.exports = postRouter;