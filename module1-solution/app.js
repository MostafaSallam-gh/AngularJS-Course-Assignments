(function() {
	/* body... */
angular.module('LunchCheck', []).controller('LunchCheckController', controllerFunc);
controllerFunc.$inject = ['$scope'];

function controllerFunc($scope){
$scope.items="";
$scope.msg="";
$scope.angularColor="";
$scope.process = function(){
	if($scope.items==""){
		$scope.angularColor="red";
		$scope.msg = "please enter data";

	}
	else{
		$scope.angularColor="green";
		var arr = [];
		var counter=0;
		arr = $scope.items.split(',');
		for(var i = 0 ;i<arr.length;i++){
			if(arr[i]=="");
			else counter++;
		}
		if(counter<=3){
		$scope.msg = "enjoy";
		}
		else if(counter>3) {
		$scope.msg = "too much";

		}

		}

}
}

})();