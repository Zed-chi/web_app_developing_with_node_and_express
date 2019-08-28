module.exports = (grunt)=>{
    [
        "grunt-cafe-mocha",
        "grunt-contrib-jshint",
        "grunt-exec"
    ].forEach((task)=>{
        grunt.loadNpmTasks(task);
    });

    grunt.initConfig(
        {
            all:{
                src:"qa/tests-*.js",
                options:{ui:"tdd"}
            },
            jshint:{
                app:["meadowlark.js", "public/js/**/*.js", "lib/**/*.js"],
                qa:["Gruntfile.js", "public/qa/**/*.js", "qa/**/*.js:"],
            },    
        }
    );
    grunt.registerTask("default", ["jshint"]);
}