'use strict';

/* Services */

myApp.factory('APIServices', [ '$http', '$rootScope', 'UNISPACE_URL','$localStorage',
		function($http, $rootScope, UNISPACE_URL,$localStorage) {

			var mmrAPI = {};
			/*******************************************************************
			 * API Services for sign in to Admin Portal
			 * 
			 * @version 1.0
			 * @Author-Rohit
			 * @created_date-
			 * @updated_date-
			 ******************************************************************/
			mmrAPI.addUser = function(firstName, lastName,email) { 
				return $http.post(UNISPACE_URL.getUserData, {
					firstName : firstName,
					lastName : lastName,
					emailId: email
				});
			}; // addUser();
			
		    //edit user
			mmrAPI.editUser = function(firstName, lastName,email) { 
				return $http.post(UNISPACE_URL.getUserData+"/"+id, {
					firstName : firstName,
					lastName : lastName,
					emailId: email
				});
			}; // addUser();
			
			
			//get user data
			
			mmrAPI.getUserData = function() {
				return $http.get(UNISPACE_URL.getUserData);
			};
			
			
			return mmrAPI;
		} ]);
