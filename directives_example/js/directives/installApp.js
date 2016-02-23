app.directive('appInfo', function() {
	return{
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'js/directives/installApp.html'
	};
});
