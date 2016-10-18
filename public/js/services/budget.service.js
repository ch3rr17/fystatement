(function() {
    'use strict';

    angular
        .module('app')
        .factory('BudgetFactory', BudgetFactory);

    BudgetFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function BudgetFactory($http, $q) {
        var service = {
            grabRevenue: grabRevenue,
            addIncome: addIncome
        };
        return service;

        ////////////////

        function grabRevenue() {
            var defer = $q.defer();

            $http.get('/revenues')
                .then(
                    function(response) {
                        defer.resolve(response.data);
                    },
                    function(error) {
                        defer.reject(err.data.message);
                    });

            return defer.promise;
        }

        function addIncome(revenue){
        	var defer = $q.defer();

        	$http.post('/revenues', revenue)
        	     .then(
        	     	function(response){
        	     		defer.resolve(response);
        	     	},
        	     	function(error){
        	     		defer.reject(err.data.message);
        	     	});
        	return defer.promise;
        }
    }
})();
