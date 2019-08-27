const express = require("express");
const app = express();
const port = process.env.PORT || 4000;


const handlebars = require("express-handlebars");
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));

/* testing feature */
app.use((req, res, next)=>{
    res.locals.showTests = app.get("env") !== "production" && req.query.test === "1";
    next();
});

/* routes */
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