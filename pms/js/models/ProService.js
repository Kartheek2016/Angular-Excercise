app.factory('MainService', function ($http) {
	return {
		getUsers: function () {
			return $http.get('../js/modules/users.json');
		},
		getProjects: function () {
			return $http.get('../js/modules/projects.json');
		},
		getTasks: function () {
			return $http.get('../js/modules/tasks.json');
		}
	};
});

app.factory('UserService', function ($http) {
	return {
		get: function () {
			return $http.get('../js/modules/users.json');
		}
	}
});

app.factory('ProjectService', function ($http) {
	return {
		get: function () {
			return $http.get('../js/modules/projects.json');
		}
	}
});

app.factory('TaskService', function ($http) {
	return {
		get: function () {
			return $http.get('../js/modules/tasks.json');
		}
	}
});
