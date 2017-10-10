window.myApp.controller(
				"userCtrl",
				[
						'$scope',
						'$rootScope',
						'$modal',
						'$log',
						'$dialogs',
						'APIServices',
						'$http',
						'cfpLoadingBar',
						'$localStorage',
						'$state',
						'UNISPACE_CONSTANT_MESSAGES',
						'UNISPACE_CONSTANT',
						function($scope, $rootScope, $modal, $log, $dialogs,
								APIServices, $http, cfpLoadingBar,
								$localStorage, $state, UNISPACE_CONSTANT_MESSAGES,UNISPACE_CONSTANT) {
							$rootScope.itemPerPageCount = 10;
							/************************************************************************************************************************
							 * open add employee popup controller 
							 * 						  
							 *************************************************************************************************************************/
							$scope.openAddUser = function() 
							{
								var size='md'
								var modalInstance = $modal
										.open({
											templateUrl : 'template/popup/addUser.html',
											controller : 'employeePopupController',
											size : size,
											scope : $scope,
											backdrop : 'static',
											resolve : 
											{
												items : function() 
												{
													return $scope.items;
												}
											}
										});

								modalInstance.result.then
								(
										function(selectedItem) {
											$scope.selected = selectedItem;
										},
										function() {
											$log.info('Modal dismissed at: '
													+ new Date());
										});
							};
							
							
							/************************************************************************************************************************
							 * open edit employee popup 
							 * 						  
							 *************************************************************************************************************************/
							$scope.openEditUser = function(user,index) 
							{
								$localStorage.id = user._id;
								$rootScope.editfirstName = user.firstName;
								$rootScope.editlastName = user.lastName;
								$rootScope.editemail = user.emailId;
								var size='md'
								var modalInstance = $modal
										.open(
												{
											templateUrl : 'template/popup/editUser.html',
											controller : 'employeePopupController',
											size : size,
											scope : $scope,
											backdrop : 'static',
											resolve :
											{
												items : function() {
													return $scope.items;
												}
											}
										});

								modalInstance.result.then(
										function(selectedItem)
										{
											$scope.selected = selectedItem;
										}, function() 
										{
											$log.info('Modal dismissed at: '
													+ new Date());
										}
										);
							};
							
							/****
							 * delete user
							 * 
							 * 
							 */
							$scope.deleteUser = function(user,index){
								cfpLoadingBar.start();
								$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
								$http.defaults.headers.common['Authorization'] = 'Basic Ymx1ZGVudGU6Ymx1ZGVudGUxMjM=';
								
								APIServices.deleteUser(user._id)
										.success(
												function(data, status) {
													console.log("*********Response edit employee***********");
													console.log(data);
													console.log(status);
													toastr.remove();
													toastr.success(data);
													 
													$rootScope.cancel();
													$scope.isSaveEmployeeButton = false;
													cfpLoadingBar.complete()
													$scope.isSaveEmployee = false;
													$state.reload();

												})
										.error(
												function(data, status) {
													cfpLoadingBar.complete()
													$scope.isSaveEmployeeButton = false;
													$scope.isSaveEmployee = false;
													if (data == null||data=='') {
														toastr.remove();
														toastr
																.error(UNISPACE_CONSTANT_MESSAGES.INTERNET_CONNECTION);
													} else {

														
														console.log("*********Response add employee***********");
														console.log(data);
														console.log(status);
														toastr.remove();
														toastr
																.error(data.error.message);

														$scope.isSaveEmployee = false;
														}
													
												});

								
							}
							/************************************************************************************************************************
							 * get employee list API integration
							 * 						  
							 *************************************************************************************************************************/
							
							$scope.getEmployeeListDetails = function(){
								cfpLoadingBar.start();
								$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; 
								$http.defaults.headers.common['Authorization'] = 'Basic Ymx1ZGVudGU6Ymx1ZGVudGUxMjM=';
								APIServices.getUserData()
										.success(
												function(data) {
													console.log("*********Response get user list***********");
													console.log(data);
													if(data){
														$scope.userList = data;
													}
													$scope.searchEmployeeValue = '';
													cfpLoadingBar.complete();
													$scope.getAllEmployeeListClicked = false;
												})
										.error(
												function(data, status) {
													cfpLoadingBar.complete();
													$scope.getAllEmployeeListClicked = false;
													if (data == null
															|| data == '') {
														toastr.remove();
														toastr
																.error(UNISPACE_CONSTANT_MESSAGES.INTERNET_CONNECTION);
													}
													if(status==401)
                                                     {
															loginAlert();
															return;
                                                     }
													
													console.log("*********Response get employee list***********");
													$scope.employeeList = '';
													$scope.totalVenues = 0;
													$scope.noEmployeeFoundMessageOnSearch = '';
													$scope.searchEmployeeValue = '';
													if(data != null){
													$scope.NoEmployeeFoundMessage = data.error.message;
														if(data.error.message == "Invalid User token."){
															$scope.NoEmployeeFoundMessage = "";
														}
														else{
															$scope.NoEmployeeFoundMessage = data.error.message;
														}
													}
													
													console.log(data);
													console.log(status);
												});
							
							}
							
						}]);


/****************************************************************************************************
 * employee popup controller
 ***************************************************************************************************/

window.myApp.controller('employeePopupController', function($scope, $rootScope,
		$modalStack, $modalInstance, $state,UNISPACE_CONSTANT_MESSAGES,$localStorage,cfpLoadingBar,APIServices,$http,UNISPACE_CONSTANT) {
	$scope.isEdit = false;
	$rootScope.clickInProgress = false;
	$rootScope.cancel = function() {
		$rootScope.editEmployeeButton = false;
		$rootScope.deleteEmployeeButton = false;
		if ($modalInstance) {
			$modalInstance.dismiss('cancel');
		}
	}
	/****************************************************************************************************
	 * save user API integration
	 * 
	 ***************************************************************************************************/
	$scope.isSaveEmployeeButton = false;
	$scope.clientId = $localStorage.clientId;
	$scope.saveUser = function(){
		cfpLoadingBar.start()
		$scope.isSaveEmployeeButton = true;
		$scope.isSaveEmployee = true;
		$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
		$http.defaults.headers.common['Authorization'] = 'Basic Ymx1ZGVudGU6Ymx1ZGVudGUxMjM=';
		
		APIServices.addUser($scope.firstName,$scope.lastName,$scope.email)
				.success(
						function(data, status) {
							console.log("*********Response add employee***********");
							console.log(data);
							console.log(status);
							toastr.remove();
							toastr.success(data);
							 
							$rootScope.cancel();
							$scope.isSaveEmployeeButton = false;
							cfpLoadingBar.complete()
							$scope.isSaveEmployee = false;
							$state.reload();

						})
				.error(
						function(data, status) {
							cfpLoadingBar.complete()
							$scope.isSaveEmployeeButton = false;
							$scope.isSaveEmployee = false;
							if (data == null||data=='') {
								toastr.remove();
								toastr
										.error(UNISPACE_CONSTANT_MESSAGES.INTERNET_CONNECTION);
							} else {

								
								console.log("*********Response add employee***********");
								console.log(data);
								console.log(status);
								toastr.remove();
								toastr
										.error(data.error.message);

								$scope.isSaveEmployee = false;
								}
							
						});

		
	}
	
	/****
	 * edit user
	 * 
	 * 
	 */
	$scope.editUser = function(){
		cfpLoadingBar.start();
		$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
		$http.defaults.headers.common['Authorization'] = 'Basic Ymx1ZGVudGU6Ymx1ZGVudGUxMjM=';
		
		APIServices.addUser($localStorage.id,$scope.editfirstName,$scope.editlastName,$scope.editemail)
				.success(
						function(data, status) {
							console.log("*********Response edit employee***********");
							console.log(data);
							console.log(status);
							toastr.remove();
							toastr.success(data);
							 
							$rootScope.cancel();
							$scope.isSaveEmployeeButton = false;
							cfpLoadingBar.complete()
							$scope.isSaveEmployee = false;
							$state.reload();

						})
				.error(
						function(data, status) {
							cfpLoadingBar.complete()
							$scope.isSaveEmployeeButton = false;
							$scope.isSaveEmployee = false;
							if (data == null||data=='') {
								toastr.remove();
								toastr
										.error(UNISPACE_CONSTANT_MESSAGES.INTERNET_CONNECTION);
							} else {

								
								console.log("*********Response add employee***********");
								console.log(data);
								console.log(status);
								toastr.remove();
								toastr
										.error(data.error.message);

								$scope.isSaveEmployee = false;
								}
							
						});

		
	}
	
	
	
});



window.myApp.directive('disallowSpaces', function() {
	  return {
	    restrict: 'A',

	    link: function($scope, $element) {
	      $element.bind('input', function() {
	        $(this).val($(this).val().replace(/ /g, ''));
	      });
	    }
	  };
	});




