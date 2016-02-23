app.controller('MainController', function ($scope, MainService) {
	MainService.getUsers().then(function (res) {
		$scope.userObj = res.data;
	});
	MainService.getProjects().then(function (res) {
		$scope.projectObj = res.data;
	});
	MainService.getTasks().then(function (res) {
		$scope.taskObj = res.data;
	});
});

app.controller('UserController', function ($scope, UserService) {
	UserService.get().then(function (res) {
		$scope.userData = res.data;
	});
});

app.controller('ProjectController', function ($scope, ProjectService) {
	ProjectService.get().then(function (res) {
		$scope.projectData = res.data;
	});
});

app.controller('TaskController', function ($scope, TaskService) {
	TaskService.get().then(function (res) {
		$scope.taskData = res.data;
	});
});
