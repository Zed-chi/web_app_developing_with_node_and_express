const fortune = require("../lib/fortune.js");
const expect = require("chai").expect;

suite("fortune testing", ()=>{
    test("getFortune() must return fortune", ()=>{
        expect(typeof fortune () === "string");
    });
});