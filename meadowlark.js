const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const handlebars = require("express-handlebars").create({defaultLayout:"main"});


app.engine("handlebars",handlebars.engine);
app.set("view engine", handlebars);

app.get("/", (req,res)=>{
    res.render("home");
});

app.get("/about", (req,res)=>{
    res.render("about")
});


app.use((err, req, res,next)=>{
    res.status(404);
    res.render("404");
});

app.use((err, req, res,next)=>{
    res.status(500);
    res.render("500");
});


app.listen(port, ()=>{
    console.log(`serverok startanul na ${port} porte`);
});