const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorController = require('./controllers/error')


const app = express();

// app.engine('pug', require('pug').__express)
app.set('view engine', 'ejs');
app.set('views', 'views')//used for specifying files if /views (folder) is stored in diff loc...
// above will work even after coommenting

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use("/admin" ,adminRouter);
app.use(shopRouter);




app.use(errorController.get404Page);


app.listen(3000,(req,res)=>{
    console.log("server up on running port 3000")
});