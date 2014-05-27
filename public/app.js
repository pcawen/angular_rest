var myAppModule = angular.module('CEPExample',['CEPExample.controllers','CEPExample.services']);
myAppModule.config(['$routeProvider', 
	function($routeProvider) { 
		$routeProvider
			.when('/', { 
				templateUrl: 'templates/list_employee.html',
				controller: 'EmpleadosController' 
			})
			.when('/edit/:empId', { 
				templateUrl: 'templates/edit_employee.html',
				controller: 'EditController' 
			})
			.when('/addEmployee', { 
				templateUrl: 'templates/edit_employee.html',
				controller: 'AddController' 
			})
			.otherwise(
				{ redirectTo: '/' 
			}); 
}]);