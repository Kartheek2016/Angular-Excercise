app.factory('MainService', function ($http) {
	return {
		getUsers: function () {
			return $http.get('../js/models/users.json');
		},
		getProjects: function () {
			return $http.get('../js/models/projects.json');
		},
		getTasks: function () {
			return $http.get('../js/models/tasks.json');
		}
	};
});

app.factory('UserService', function ($http, MainService) {
	return {
		get: function () {
			return MainService.getUsers();
		}
	}
});

app.factory('ProjectService', function ($http, MainService) {
	return {
		get: function () {
			return MainService.getProjects();
		}
	}
});

app.factory('TaskService', function ($http, MainService) {
	return {
		get: function () {
			return MainService.getTasks();
		}
	}
});

app.factory('UserProjectsService', function ($http, $q, MainService) {
	return {
		getProject: function (user_id) {
			var defered = $q.defer();
			var particularProject = [];
			MainService.getProjects().success(function(data) {
				for(var i = 0; i < data.projects.length; i++) {
					for(var j = 0; j < data.projects[i].project_members.user_id.length; j++) {
						if(user_id == data.projects[i].project_members.user_id[j]){
							particularProject.push(data.projects[i]);
						}
					}
				}
				defered.resolve(particularProject);
			});
			return defered.promise;
		}
	};
});