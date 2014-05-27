var services = angular.module('CEPExample.services',[]);
services.service('EmpleadosService',function($http, $q){
	var EmpleadosService = {};
	EmpleadosService.getEmpleadosList = function(){
		var deferred = $q.defer();
		$http.get("/employees",{"headers" : {"Accept" : "application/json"}})
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(){
			deferred.reject("An error occured while fetching status");
		});
		
		return deferred.promise;
	},

	EmpleadosService.getEmployeeById = function(empId){
		var deferred = $q.defer();
		var employee = null;
		$http.get("/employees/" + empId,{"headers" : {"Accept" : "application/json"}})
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(){
			deferred.reject("An error occured while fetching status");
		});

		return deferred.promise;
	},

	EmpleadosService.addEmployee = function(employee){
		console.log('addig employee: ' + angular.toJson(employee));
		var deferred = $q.defer();
		$http({
		    method: 'POST',
		    url: '/employees',
		    data: employee,
		    headers: {'Content-Type': 'application/json'}
		})
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(){
			deferred.reject("An error occured while fetching status");
		});
		
		return deferred.promise;
	},

	EmpleadosService.removeEmployee = function(empId){
		$http.delete("/employees/" + empId,{"headers" : {"Accept" : "application/json"}});
	}

	EmpleadosService.updateEmployee = function(employee){
		console.log('Updating employee' + angular.toJson(employee));
		var deferred = $q.defer();
		$http({
		    method: 'PUT',
		    url: '/employees/' + employee.id,
		    data: employee,
		    headers: {'Content-Type': 'application/json'}
		})
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(){
			deferred.reject("An error occured while fetching status");
		});
	}
	
	return EmpleadosService;
});
services.service('SelectedEmp',function(){
	var SelectedEmp = {};
	SelectedEmp.employee = {};//{ id: 1, name: 'juanjo', salary: 1000 };

	return SelectedEmp;
});