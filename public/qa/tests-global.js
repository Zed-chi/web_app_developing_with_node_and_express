import { AssertionError } from "assert";

suite("Global-test", ()=>{
    test("title", ()=>{
        assert(
            document.title && 
            document.title.match(/\S/) && 
            document.title.toUpperCase() !=="TODO"
        );
    });
});