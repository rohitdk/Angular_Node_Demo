myApp
		.run([
						'$http',
						'$rootScope',
						'$modalStack',
						function($http, $rootScope, $modalStack) {
							$http.defaults.headers.common['Content-Type'] = "application/json";
							$http.defaults.headers.common.language = 'en-US';
							$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
							$rootScope.$on('$locationChangeStart', function(
									event) {
								var top = $modalStack.getTop();
								if (top) {
									$modalStack.dismiss(top.key);
									event.preventDefault();
								}
							});
							
						} ])
		
