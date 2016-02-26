var app = angular.module('projectApp', ['ngRoute', 'ngLodash']);

app.config(function($routeProvider) {
	$routeProvider.when('/fetchAll', {
		controller: 'ProController',
		templateUrl: 'views/fetchAll.html'
	}).when('/users', {
		controller: 'UserController',
		templateUrl: 'views/user.html'
	}).when('/projects', {
		controller: 'ProjectController',
		templateUrl: 'views/project.html'
	}).when('/tasks', {
		controller: 'TaskController',
		templateUrl: 'views/task.html'
	}).when('/user/:id/projects', {
		controller: 'UserProjectsController',
		templateUrl: 'views/project.html'
	}).when('/:id', {
		controller: 'UserProjectsController',
		templateUrl: 'views/project.html'
	});
});