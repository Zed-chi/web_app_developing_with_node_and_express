suite(
    "test page", ()=>{
        test("page must contain contants link", ()=>{
            assert($("a[hrefe='/contact").length);
        });
    }
);