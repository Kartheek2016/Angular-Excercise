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

app.factory('ProjectTasksService', function ($http, $q, ProService) {
	return {
		getTasks: function (project_id) {
			var defered = $q.defer();
			var particularTask = [];
			ProService.getTasks().success(function(data) {
				for(var i = 0; i < data.tasks.length; i++) {
					for(var j = 0; j < data.tasks[i].project_id.length; j++) {
						if(project_id == data.tasks[i].project_id[j]){
							particularTask.push(data.tasks[i]);
						}
					}
				}
				defered.resolve(particularTask);
				console.log(particularTask);
			});
			return defered.promise;
		}
	};
});