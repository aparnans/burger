const express =  require("express");
const exhb = require('express-handlebars');
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const routes = require("./routes/apiroutes");

const app = express();
const PORT = 8090;

// configure app to use the packages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use("/", routes);

app.engine("handlebars",exhb({defaultlayout: "main"}));

app.set("view engine", "handlebars");


app.listen(PORT, function(){
    console.log("server is listening on  http://localhost:" +PORT);
})
