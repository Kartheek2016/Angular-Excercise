app.controller('ProController', function ($scope, $rootScope, ProService) {
	ProService.getUsers().then(function (res) {
		$rootScope.userObj = res.data;
	});
	ProService.getProjects().then(function (res) {
		$scope.projectObj = res.data;
	});
	ProService.getTasks().then(function (res) {
		$scope.taskObj = res.data;
	});
});

app.controller('UserController', function ($scope, $rootScope, UserService, UserProjectsService) {
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

app.controller('UserProjectsController', function ($scope, $routeParams, UserProjectsService) {
	$scope.user_id = $routeParams.id;
	UserProjectsService.getProject($scope.user_id).then(function (res) {
		$scope.resp = res;
	});
});

app.controller('DashboardController', function ($scope, $rootScope, UserService, UserProjectsService) {
	
	$rootScope.defaultUser = 1;
	
	UserService.get().then(function (res) {
		$scope.userData = res.data;
	});

	$scope.changeUser = function(id){
		$scope.curUser = _.filter($scope.userData.users, { 'user_id': id });
		
		UserProjectsService.getProject(id).then(function (res) {
			$scope.resp = res;
		});
	};
});