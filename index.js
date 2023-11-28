import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const _dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
var bandName= '';

app.use(bodyParser.urlencoded({extended:true}));

function nameGenerator(req , res , next){
    console.log(req.body);
    bandName= req.body["street"] + req.body["pet"];
    next();
}

app.use(nameGenerator);

app.post("/submit" , (req , res)=>{
res.send("<h1>"+bandName+"</h1>")
}),


app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log("Listening to port" + port.toString());
});

