myApp.config([ '$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/user');

			$stateProvider

			// HOME STATES AND NESTED VIEWS
			// ========================================
			.state('user', {
				url : '/user',
				templateUrl : 'template/user.html',
				controller : 'userCtrl'
			})

		} ]);

