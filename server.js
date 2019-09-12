const express =  require("express");
const exhb = require('express-handlebars');

const app = express();

const PORT = 8090;

app.engine("handlebars",exhb({defaultlayout: "main"}));

app.set("view engine", "handlebars");

app.listen(PORT, function(){
    console.log("server is listening on  http://localhost:" +PORT);
})
