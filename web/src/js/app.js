requirejs.config({
    paths: {
        "jquery": "lib/jquery"
    }
});

// Load the main app module to start the app
requirejs(["modules/main"]);



