Package.describe({
	summary: "Foundation 5 with Sass for Meteor"
});

Package.on_use(function (api) {
	api.use([
		'jquery',
		'scss',
	], 'client');

	api.add_files([
        'init.js',
        'js/vendor/modernizr.js',
        'js/foundation.js'
	], 'client');

});