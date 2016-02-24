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

app.factory('UserProjectsService', function ($http, $q) {
	return {
		getProject: function (user_id) {
			var defered = $q.defer();
			var particularProject = [];
			$http.get('../js/modules/projects.json').success(function(data) {
				for(var i = 0; i < data.projects.length; i++) {
					for(var j = 0; j < data.projects[i].project_members.user_id.length; j++) {
						if(user_id == data.projects[i].project_members.user_id[j]){
							particularProject.push(data.projects[i]);
						}
					}
				}
				console.log(particularProject);
				defered.resolve(particularProject);
			});
			return defered.promise;
		}
	};
});
