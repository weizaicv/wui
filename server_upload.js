const express = require('express')
const multer = require('multer')
const cors = require('cors') //允许跨域
const upload = multer({dest:'uploads/'})
const app = express()

app.post('/upload',cors(), upload.single('file'),(req, res, next) => {
    // console.log(req.file)
    // res.send(req.file.filename)
    // res.status(404);
    res.json({key:req.file.filename})
})

app.get('/upload/:key',cors(),(req, res, next)=>{
    res.sendFile(`uploads/${req.params.key}`,{
        root: __dirname,
        headers:{
            'Content-Type':'image/jpeg'
        }
    },(error)=>{
        if(error){
            res.status(404).send('Not Found')
        }
    })
})

app.listen(3333,function(){
    console.log('listen app 3333 port!')
})