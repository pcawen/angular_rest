var controllers = angular.module('CEPExample.controllers',[],function(){});
//controllers.value('selectedEmp', {employee: { id: 1, name: 'juanjo', salary: 1000 }});
controllers.controller('EmpleadosController',function($scope, EmpleadosService, SelectedEmp){
	/*$scope.empleados = [
		{ id: 1, name: 'juanjo', salary: 1000 },
		{ id: 2, name: 'pepe', salary: 2000 },
		{ id: 3, name: 'lito', salary: 3000 }
	];*/
	var promise = EmpleadosService.getEmpleadosList();
	promise.then(function(data) {
        $scope.empleados = data;
    });

    $scope.select = function(emp){
    	SelectedEmp.employee = emp;
    };
});
controllers.controller('EditController',function($scope, $rootScope, $location, $routeParams, EmpleadosService, SelectedEmp){

	//Instead of retrieving the employee from the service, we pass it from the previous controller
	/*var promise = EmpleadosService.getEmployeeById($routeParams.empId);
	promise.then(function(data) {
        $scope.empleado = data;
    });*/
    $scope.empleado = SelectedEmp.employee;

	$scope.remove = function(){
		console.log('calling remove function');
		EmpleadosService.removeEmployee($routeParams.empId);
		$rootScope.removeSuccess = true;
		$location.url('/');
	};

	$scope.save = function(){
		console.log('calling save(update) function');
		console.log('Updating employee' + angular.toJson($scope.empleado));
		EmpleadosService.updateEmployee($scope.empleado);
		$scope.editSuccess = true;
		//$location.url('/');
	};

});
controllers.controller('AddController',function($scope, $rootScope, $location, EmpleadosService){
	$scope.save = function(){
		console.log('calling save function');
		EmpleadosService.addEmployee($scope.empleado);
		$scope.addSuccess = true;
		//$location.url('/');
	};
});