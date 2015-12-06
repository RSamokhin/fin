require.config({
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    paths: {
        "jquery" : "lib/jquery",
        "bootstrap" :  "lib/bootstrap.min"
    }
});
require(
    ["jquery", "bootstrap"],
    function($)
    {
    }
);