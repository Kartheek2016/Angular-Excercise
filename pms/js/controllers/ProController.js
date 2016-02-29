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

app.controller('DashboardController', function ($scope, $rootScope, $location, UserService, UserProjectsService) {
	
	$rootScope.defaultUser = 1;
	
	UserService.get().then(function (res) {
		$scope.userData = res.data;
	});

	$scope.changeUser = function(id){
		$location.path("/projects/" + id);
	};

});

app.controller('userProjectsController', function ($scope, $routeParams, UserService, UserProjectsService) {
	$scope.userId = $routeParams.currentUser;

	UserService.get().then(function (res) {
		$scope.userData = res.data;
	});
	
	$scope.curUser = _.filter($scope.userData.users, function(r){
		return r.user_id == $scope.userId;
	});
	
	UserProjectsService.getProject($scope.userId).then(function (res) {
		$scope.resp = res;
	});

});

app.controller('ProjectTasksController', function ($scope, $routeParams, ProjectTasksService) {
	$scope.project_id = $routeParams.projectId;
	ProjectTasksService.getTasks($scope.project_id).then(function (res) {
		$scope.resp = res;
	});

});