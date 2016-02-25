app.factory('ProService', function ($http) {
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

app.factory('UserService', function ($http, ProService) {
	return {
		get: function () {
			return ProService.getUsers();
		}
	}
});

app.factory('ProjectService', function ($http, ProService) {
	return {
		get: function () {
			return ProService.getProjects();
		}
	}
});

app.factory('TaskService', function ($http, ProService) {
	return {
		get: function () {
			return ProService.getTasks();
		}
	}
});

app.factory('UserProjectsService', function ($http, $q, ProService) {
	return {
		getProject: function (user_id) {
			var defered = $q.defer();
			var particularProject = [];
			ProService.getProjects().success(function(data) {
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