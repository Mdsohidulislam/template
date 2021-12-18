const express = require('express');
const app =  express();
const cors = require('cors');
const bodyParser = require('body-parser');   
const fileUpload=  require('express-fileupload');
const postRouter = require('./RouteHandler/postRouter');
const fs = require('fs')
const router = express.Router();





var whitelist = ['http://localhost:3000', 'http://localhost:3000']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
        } else {
        callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(bodyParser.json({
    limit:'50mb'
    })
)

// app.use(
//     bodyParser.urlencoded({
//     limit: '50mb',
//     extended: true,
//     parameterLimit: 50000,
//     }),
// );   

app.use(fileUpload())
app.use(express.static('images'))
app.use(cors(corsOptions))
app.use('/post', postRouter)

const port = process.env.PORT || 3009;

app.get('*',(req, res)=>{

    res.status(200).send('<h1>Hello mysql  server developer</h1>');
})

app.post('/post',(req, res) => {
    console.log(req.body); 
    res.status(200).send('Successfully data Submitted');
})



app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`Server is runnin on port http://localhost:${port}`);
})