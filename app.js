
const express = require("express");
const bodyParser = require("body-parser");
const lodash = require("lodash");
const ejs = require('ejs');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : "true"}));
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("home");
});

app.post("/",function(req,res){
    let item = req.body.item;
    

    function chectypebol(params){
        return !isNaN(params);
    }

    //const strings = typeof(item);

    if(!(chectypebol(item))){
        const len = item.length;
        if(len == 7){
            res.render("thala");
        } else {
            switch(item){
                case "snippet":
                    res.render("thala");
                    break;
                case "thala":
                    res.render("thala");
                    break;
                default :
                    console.log("kutaa");
                    res.render("nothala");
                    break;
                }
        }

    } else{
        
        let sum = 0;

        for(let i = 0; i < item.length; i++){
            sum += parseInt(item[i]);
        }
        console.log(sum);
        if (sum == 7){
            res.render("thala");
        } else {
            res.render("nothala");
        }

    }
});

app.listen(3000,function(req,res){
    console.log("server is running on port 3000");
})