const express = require("express");
const app = express();
const port = process.env.PORT || 4000;


const handlebars = require("express-handlebars");
handlebars.create(
    {
        defaultLayout:"main",
        helpers:{
            section: (name, options)=>{
                if(!this._sections) {this._section = {};}
                this._sections[name] = options.fn(this);
                return null;
            },
        }
    }
);
app.engine('handlebars', handlebars());

app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));

/* testing feature */
app.use((req, res, next)=>{
    res.locals.showTests = app.get("env") !== "production" && req.query.test === "1";
    next();
});

app.use((req,res,next)=>{
    if(!res.locals.partials){res.locals.partials = {};}
    res.locals.partials.weatherContext = getWeatherData();
    next();
});


/* routes */
app.get("/", (req,res)=>{
    res.render("home");
});

app.get("/about", (req,res)=>{
    res.render("about",{
        fortune:getFortune(),
        pageTestScript:"/qa/tests-about.js"
    });
});

app.get("/tours/hood-river", (req, res)=>{
    res.render("tours/request-group-river");
});

app.get("/tours/request-group-rate", (req, res)=>{
    res.render("tours/hood-river");
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


/*
functions
*/

const getWeatherData = ()=>{
    return {
        locations:[
            {name:"PortLand1", forecastUrl:"someurl",iconUrl:"someUrl", weather:"Cloudy", temp:"12.3C"},
            {name:"PortLand2", forecastUrl:"someurl",iconUrl:"someUrl", weather:"Cloudy", temp:"12.3C"},
            {name:"PortLand3", forecastUrl:"someurl",iconUrl:"someUrl", weather:"Cloudy", temp:"12.3C"},
        ]
    };
};