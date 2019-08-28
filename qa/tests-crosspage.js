const Browser = require("zombie");
const assert = require("chai").assert;

let browser = null;

suite("Cross page tests", ()=>{
    setup(()=>{
        browser = new Browser;
    });

    test(
        "Request of cost for group from hood river page must fill referrer field", 
        (done)=>{
            const ref = "http://localhost:4000/tours/hood-river";
            browser.clickLink(".requestGroupRate", ()=>{
                assert(browser.field("referrer").value === referrer);
            });
            done();
        }
    );

    test(
        "visiting 'requestfor group' must led to empty ref field",
        (done)=>{
             assert(browser.field("referrer").value === "");
             done();
        }
    );
});