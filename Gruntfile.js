module.exports = function(grunt){
	grunt.initConfig({
		copy: {
			main:{
				files: [{
					src: 'bower_components/codemirror/lib/codemirror.js',
					dest: 'public/scripts/codemirror.js'
				}, {
					src: 'bower_components/codemirror/lib/codemirror.css',
					dest: 'public/css/codemirror.css'
				}, {
					src: 'bower_components/codemirror/addon/hint/show-hint.js',
					dest: 'public/scripts/show-hint.js'
				}, {
					src: 'bower_components/codemirror/addon/hint/show-hint.css',
					dest: 'public/css/show-hint.css'
				}, {
					src: '../typescript/built/local/typescriptServices.js',
					dest: 'public/scripts/typescriptServices.js'
				}, {
					src: '../typescript/built/local/typescriptServices.d.ts',
					dest: 'public/scripts/typescriptServices.d.ts'
				}, {
					src: '../typescript/built/local/lib.d.ts',
					dest: 'public/scripts/lib.d.ts'
				}, {
					src: 'bower_components/jasmine/lib/jasmine-core/jasmine.css',
					dest: 'public/css/jasmine.css'
				}, {
					src: 'bower_components/jasmine/lib/jasmine-core/jasmine.js',
					dest: 'public/scripts/jasmine.js'
				}, {
					src: 'bower_components/jasmine/lib/jasmine-core/jasmine-html.js',
					dest: 'public/scripts/jasmine-html.js'
				}, {
					src: 'bower_components/jasmine/lib/jasmine-core/boot.js',
					dest: 'public/scripts/boot.js'
				}, {
					src: 'bower_components/d3/d3.js',
					dest: 'public/scripts/d3.js'
				}]			
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy']);
}