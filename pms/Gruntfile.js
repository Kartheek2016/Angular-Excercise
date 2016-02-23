module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		'http-server': {
			dev: {
				root: "",
				host: "127.0.0.1",
	            port: function(){ return 8585; },
	            https: false,
	            openBrowser: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-http-server');
}
